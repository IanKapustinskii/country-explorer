import { type CardList } from "../../api/Card"
import { type FC } from "react";
import { CardView } from "../Card/Card";
import { Link } from 'react-router-dom';

export interface CardListViewProps {
    countryList: CardList,
}

export const CardListView: FC<CardListViewProps> = ({countryList}) => {

    return (
            <ul className="card__list list-reset flex">
                {
                    countryList.map((card) => (
                        <li key={card.flag} className="card__item">
                            <Link 
                            to={`/country/${card.cca3}`}
                            >
                           <CardView country={card}/>
                           </Link>
                        </li>
                    ))
                }
            </ul>
    );
}