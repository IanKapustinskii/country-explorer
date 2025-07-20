import { useCardList } from "../../api/Card";
import { Selector } from "../Selector/Selector";
import { Loader } from "../Loader/Loader";
import { CardListView } from "./CardList";
import { useEffect, useRef, useState } from 'react';
import "./CardList.css";
import { IonIcon } from "@ionic/react";
import { searchOutline } from "ionicons/icons";


export const FetchCardListView = () => {
    const [region, setRegion] = useState(() => localStorage.getItem('selectedRegion') || 'europe');
    useEffect(() => {
        localStorage.setItem('selectedRegion', region);
    }, [region]);
    const { state, refetch } = useCardList(`https://restcountries.com/v3.1/region/${region}`);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredCountries = state.data?.filter((country) => {
        const name = country.name?.common?.toLowerCase() || "";
        const capital = country.capital?.[0]?.toLowerCase() || "";
        const translatedNames = Object.values(country.translations || {})
            .map((t) => t.common?.toLowerCase())
            .filter(Boolean);
        const search = searchTerm.toLowerCase();

        return name.includes(search) || capital.includes(search) ||  translatedNames.some((translatedName) => translatedName.includes(search));
    });

    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };


    switch (state.status) {
        case "pending":
            return <Loader />;

        case "success":
            if (state.data) {
                return (
                    <main>
                        <section className="contries">
                            <div className='container flex contries__container'>

                                <div className="flex input-wrapper">
                                    <div className="flex search-wrapper" onClick={focusInput}>
                                        <IonIcon icon={searchOutline} className="search-icon" />
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={searchTerm}
                                            onChange={handleSearch}
                                            placeholder="Search countries..."
                                            className="search-input"
                                        />
                                    </div>

                                    <Selector region={region} setRegion={setRegion} />
                                </div>

                                {filteredCountries && <CardListView countryList={filteredCountries} />}
                            </div>
                        </section>
                    </main>
                )
            } else {
                return (
                    <div>
                        <span>Error</span>

                        <button onClick={refetch}>Repeat</button>
                    </div>
                )
            };

        case "error":
            return (
                <div>
                    <span>Error</span>

                    <button onClick={refetch}>Repeat</button>
                </div>
            );
    }
};