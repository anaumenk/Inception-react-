import React, {Component}  from 'react';
import {HeroesArray} from './Heroes';
import {InfoArray} from './Info';
import { Link } from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            HeroesArray: [],
            InfoArray: [],

            castIid1: 0,
            castName1: '',
            castSrc1: '',

            castIid2: 1,
            castSrc2: '',

            castIid3: 2,
            castSrc3: '',

            infoId1: 0,
            infoSrc1: '',
            infoName1: '',

            infoId2: 1,
            infoSrc2: '',
            infoName2: '',

            infoId3: 2,
            infoSrc3: '',
            infoName3: '',
        }
    }


    // componentDidMount() {
    //     fetch('https://yts.am/api/v2/list_movies.json?query_term=inception').then(
    //     response => response.json())
    //         .then(data => this.setState({list: data.data.movies}, this.forceUpdate()))
    // }

    async componentWillMount() {
        this.setState({
            HeroesArray: HeroesArray,
            InfoArray: InfoArray,
        })
    }


    async componentDidMount() {
        this.setState({
            castId1: 0,
            castName1: this.state.HeroesArray[0].name,
            castSrc1: require(`../images/heroes/${this.state.HeroesArray[0].src}`),

            castId2: 1,
            castSrc2: require(`../images/heroes/${this.state.HeroesArray[1].src}`),

            castId3: 2,
            castSrc3: require(`../images/heroes/${this.state.HeroesArray[2].src}`),

            infoId1: 0,
            infoSrc1: require(`../images/info/${this.state.InfoArray[0].src}`),
            infoName1: this.state.InfoArray[0].name,

            infoId2: 1,
            infoSrc2: require(`../images/info/${this.state.InfoArray[1].src}`),
            infoName2: this.state.InfoArray[1].name,

            infoId3: 2,
            infoSrc3: require(`../images/info/${this.state.InfoArray[2].src}`),
            infoName3: this.state.InfoArray[2].name,
        })
    }

    CastSlideRight() {
        let id1 = this.state.castId1 === HeroesArray.length - 1 ? 0 : this.state.castId1 + 1,
            id2 = id1 === HeroesArray.length - 1 ? 0 : id1 + 1,
            id3 = id2 === HeroesArray.length - 1 ? 0 : id2 + 1;
        this.changeCast(id1, id2, id3);
    }

    CastSlideLeft() {
        let id1 = this.state.castId1 === 0 ? HeroesArray.length - 1 : this.state.castId1 - 1,
            id2 = id1 === HeroesArray.length - 1 ? 0 : id1 + 1,
            id3 = id2 === HeroesArray.length - 1 ? 0 : id2 + 1;
        this.changeCast(id1, id2, id3);
    }

    changeCast(id1, id2, id3) {
        this.setState({
            castId1: id1,
            castName1: this.state.HeroesArray[id1].name,
            castSrc1: require(`../images/heroes/${this.state.HeroesArray[id1].src}`),

            castId2: id2,
            castSrc2: require(`../images/heroes/${this.state.HeroesArray[id2].src}`),

            castId3: id3,
            castSrc3: require(`../images/heroes/${this.state.HeroesArray[id3].src}`),
        })
    }

    InfoSlideRight() {
        let id1 = this.state.infoId1 === InfoArray.length - 1 ? 0 : this.state.infoId1 + 1,
            id2 = id1 === InfoArray.length - 1 ? 0 : id1 + 1,
            id3 = id2 === InfoArray.length - 1 ? 0 : id2 + 1;
        this.changeInfo(id1, id2, id3);

    }

    InfoSlideLeft() {
        let id1 = this.state.infoId1 === 0 ? InfoArray.length - 1 : this.state.infoId1 - 1,
            id2 = id1 === InfoArray.length - 1 ? 0 : id1 + 1,
            id3 = id2 === InfoArray.length - 1 ? 0 : id2 + 1;
        this.changeInfo(id1, id2, id3);
    }

    changeInfo(id1, id2, id3) {
        this.setState({
            infoId1: id1,
            infoSrc1: require(`../images/info/${this.state.InfoArray[id1].src}`),
            infoName1: this.state.InfoArray[id1].name,

            infoId2: id2,
            infoSrc2: require(`../images/info/${this.state.InfoArray[id2].src}`),
            infoName2: this.state.InfoArray[id2].name,

            infoId3: id3,
            infoSrc3: require(`../images/info/${this.state.InfoArray[id3].src}`),
            infoName3: this.state.InfoArray[id3].name,
        })
    }


    render() {
        return (
            <div className="content">
                <div className="trailer_poster">
                    <div className="trailer">
                            <iframe
                                title="inception trailer"
                                src="https://www.youtube.com/embed/xitHF0IPJSQ"
                            ></iframe>
                    </div>
                    <Link to="/movie">
                        <div className="poster">
                            <img alt="poster" src={require('../images/poster01.jpg')} />
                        </div>
                    </Link>
                </div>
                <div className="home_slider">
                    <Link to="/heroes"><div className="label">Cast</div></Link>
                    <div className="arrow arrow-left home_arrow" onClick={() => this.CastSlideLeft()}></div>
                    <div className="heroesList">
                        <a
                            href={`heroes#${this.state.castId1}`}
                            className="heroImg"
                            style={{background: `url(${this.state.castSrc1})`}}
                        >
                        </a>
                        <a
                            href={`heroes#${this.state.castId2}`}
                            className="heroImg"
                            style={{background: `url(${this.state.castSrc2})`}}
                        >
                        </a>
                        <a
                            href={`heroes#${this.state.castId3}`}
                            className="heroImg"
                            style={{background: `url(${this.state.castSrc3})`}}
                        >
                        </a>

                    </div>
                    <div className="arrow arrow-right home_arrow" onClick={() => this.CastSlideRight()}></div>
                </div>
                <div className="home_slider">
                    <Link to="/info"><div className="label">Info</div></Link>
                    <div className="arrow arrow-left home_arrow" onClick={() => this.InfoSlideLeft()}></div>

                    <div className="info_list">
                        <Link to={`info/${this.state.infoId1}`} className="infoItem">
                            <div
                                style={{background: `url(${this.state.infoSrc1})`}}></div>
                            <p>{this.state.infoName1}</p>
                        </Link>
                        <Link to={`info/${this.state.infoId2}`} className="infoItem">
                            <div
                                style={{background: `url(${this.state.infoSrc2})`}}></div>
                            <p>{this.state.infoName2}</p>
                        </Link>
                        <Link to={`info/${this.state.infoId3}`} className="infoItem">
                            <div
                                style={{background: `url(${this.state.infoSrc3})`}}></div>
                            <p>{this.state.infoName3}</p>
                        </Link>

                    </div>

                    <div className="arrow arrow-right home_arrow" onClick={() => this.InfoSlideRight()}></div>
                </div>
                {/*</div>*/}
            </div>
        )
    }
}

export default Home;