import React  from 'react';
import {Link, Route} from "react-router-dom";

export const HeroesArray = [
    {
        id: 0,
        name: 'Dom Cobb',
        src: 'Leonardo_DiCaprio.jpg'
    },
    {
        id: 1,
        name: 'Arthur',
        src: 'Joseph_Gordon.jpg'
    },

    {
        id: 2,
        name: 'Ariadne',
        src: 'Ellen_Page.jpg'
    },

    {
        id: 3,
        name: 'Eames',
        src: 'Tom_Hardy.jpg'
    },

    {
        id: 4,
        name: 'Mr.Saito',
        src: 'Ken_Watanabe.jpg'
    },

    {
        id: 5,
        name: 'Yusuf',
        src: 'Dileep_Rao.jpg'
    },

    {
        id: 6,
        name: 'Robert Michael Fischer',
        src: 'Cillian_Murphy.jpg'
    },

    {
        id: 7,
        name: 'Peter Browning',
        src: 'Tom_Berenger.jpg'
    },

    {
        id: 8,
        name: 'Mal Cobb',
        src: 'Marion_Cotillard.jpg'
    },

    {
        id: 9,
        name: 'Maurice Fischer',
        src: 'Pete_Postlethwaite.jpg'
    },

    {
        id: 10,
        name: 'Professor Stephen Miles',
        src: 'Michael_Caine.jpg'
    },

    {
        id: 11,
        name: 'Nash',
        src: 'Lukas_Haas.jpg'
    },

    {
        id: 12,
        name: 'woman whom Eames disguises himself as in a dream',
        src: 'Talulah_Riley.jpg'
    },
];

const Hero = ({ match }) => <h3>Hero: {match.params.name}</h3>;
const Heroes = ({ match }) => (
    <div>
        <h2>Heroes</h2>

        <ul>
            <li>
                <Link to={`${match.url}/Dom-Cobb`}>Dom Cobb</Link>
            </li>
            <li>
                <Link to={`${match.url}/Arthur`}>Arthur</Link>
            </li>
            <li>
                <Link to={`${match.url}/Ariadne`}>Ariadne</Link>
            </li>
            <li>
                <Link to={`${match.url}/Eames`}>Eames</Link>
            </li>
            <li>
                <Link to={`${match.url}/Mr.Saito`}>Mr.Saito</Link>
            </li>
            <li>
                <Link to={`${match.url}/Yusuf`}>Yusuf</Link>
            </li>
            <li>
                <Link to={`${match.url}/Robert-Michael-Fischer`}>Robert Michael Fischer</Link>
            </li>
            <li>
                <Link to={`${match.url}/Peter-Brownin`}>Peter Brownin</Link>
            </li>
            <li>
                <Link to={`${match.url}/Mal-Cobb`}>Mal Cobb</Link>
            </li>
            <li>
                <Link to={`${match.url}/Maurice-Fischer`}>Maurice Fischer</Link>
            </li>
            <li>
                <Link to={`${match.url}/Professor-Stephen-Miles`}>Professor Stephen Miles</Link>
            </li>
            <li>
                <Link to={`${match.url}/Nash`}>Nash</Link>
            </li>
            <li>
                <Link to={`${match.url}/woman-whom-Eames-disguises-himself-as-in-a-dream`}>woman whom Eames disguises himself as in a dream</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:name`} component={Hero} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

export default Heroes;
