import { Link, useParams } from 'react-router-dom';
import { IonIcon } from "@ionic/react";
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../api/QueryClient';
import "./countryDetail.css"
import { arrowBackOutline } from 'ionicons/icons';
import { Loader } from '../Loader/Loader';

export const CountryDetailPage = () => {

    const { countryCode } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['country', countryCode],
        queryFn: async () => {
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const json = await res.json();
            return json[0];
        },
        enabled: !!countryCode,
    }, queryClient);

    const bordersQuery = useQuery({
        queryKey: ['borders', data?.borders],
        queryFn: async () => {
            if (!data?.borders || data.borders.length === 0) return [];
            const codes = data.borders.join(',');
            const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
            const json = await res.json();
            return json;
        },
        enabled: !!data?.borders?.length,
    }, queryClient);

    if (isLoading) return <p><Loader /></p>;
    if (error || !data) return <p>Something went wrong.</p>;

    return (
        <section className="container contry__container flex">

            <Link to={'/'} className='link'>
                <IonIcon icon={arrowBackOutline} />
                Back
            </Link>

            <div className='country flex'>
                <img className='country__img' src={data.flags.png} alt={data.flags.alt} />
                <div className="country__details flex">
                    <h1 className="title country__title" >{data.name.common}</h1>

                    <ul className="list-reset country__list">
                        <li className='country__item country-native'>
                            Native Name: {
                                data.name.nativeName
                                    ? Object.values(data.name.nativeName as Record<string, { common: string }>)
                                        .map((native) => native.common)
                                        .join(', ')
                                    : 'Unknown'
                            }
                        </li>
                        <li className='country__item country-population'>
                            Population: {data.population.toLocaleString()}
                        </li>
                        <li className='country__item country-region'>
                            Region: {data.region}
                        </li>
                        <li className='country__item country-sub-region'>
                            Sub Region: {data.subregion}
                        </li>
                        <li className='country__item country-capital'>
                            Capital: {data.capital?.join(', ')}
                        </li>
                        <li className='country__item'>
                            Top Level Domain: {data.tld?.join(', ') ?? 'Unknown'}
                        </li>
                        <li className='country__item'>
                            Currencies:  {data.currencies
                                ? Object.values(data.currencies as Record<string, { name: string; symbol?: string }>)
                                    .map((currency) =>
                                        currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name
                                    )
                                    .join(', ')
                                : 'Unknown'}
                        </li>
                        <li className='country__item'>
                            Languages: {data.languages ? Object.values(data.languages).join(', ') : 'Unknown'}
                        </li>
                    </ul>

                    {data.borders && data.borders.length > 0 ? (
                        <div className="country__borders flex">
                            <h3 className='title borders__title'>Border Countries:</h3>
                            <ul className="list-reset flex borders__list">
                                {bordersQuery.data?.map((country: any) => (
                                    <li key={country.cca3} className='border__item link'>
                                        <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className='border-none'> Border Countries: None</p>
                    )}
                </div>
            </div>
        </section>
    );
};