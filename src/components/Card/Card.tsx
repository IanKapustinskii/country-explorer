import type { FC } from "react"
import type { Card } from "../../api/Card"
import "./Card.css"


interface CardViewProps {
    country: Card,
};

export const CardView: FC<CardViewProps> = ({ country }) => {
    return <div className="card flex">
        <img src={country.flags.png} alt={country.flags.alt} className="card__image"/>
        <div className="card__descr flex">
            <h3 className="title card__title">{country.name.common}</h3>
            <span className="card__span population">Population: {country.population.toLocaleString()} </span>
            <span className="card__span region">Region: {country.region} </span>
            <span className="card__span capital">Capital: {country.capital} </span>
        </div>
    </div>
}