import React, {Component}  from 'react';
import { Link } from "react-router-dom";

const ScenesArray = [
    {
        id: 0,
        name: 'name',
        src: '01.jpg',
    },
    {
        id: 1,
        name: 'name',
        src: '02.jpg',
    },
    {
        id: 2,
        name: 'name',
        src: '03.jpg',
    },
    {
        id: 3,
        name: 'name',
        src: '04.jpg',
    },
    {
        id: 4,
        name: 'name',
        src: '05.jpg',
    },
    {
        id: 5,
        name: 'name',
        src: '06.jpg',
    },
    {
        id: 6,
        name: 'name',
        src: '07.jpg',
    },
    {
        id: 7,
        name: 'name',
        src: '08.jpg',
    },
    {
        id: 8,
        name: 'name',
        src: '09.jpg',
    },
    {
        id: 9,
        name: 'name',
        src: '10.jpg',
    },
    {
        id: 10,
        name: 'name',
        src: '11.jpg',
    },
    {
        id: 11,
        name: 'name',
        src: '12.jpg',
    },
    {
        id: 12,
        name: 'name',
        src: '13.jpg',
    },
    {
        id: 13,
        name: 'name',
        src: '14.jpg',
    },
    {
        id: 14,
        name: 'name',
        src: '15.jpeg'
    }
];

class Gallery extends Component {

    state ={
        imgId: this.props.imgId,
        imgSrc: require(`../images/scenes/${ScenesArray[this.props.imgId].src}`),
        imgAlt: ScenesArray[this.props.imgId].name,
    }

    changeImage(id) {
        this.setState({
            imgId: id,
            imgSrc: require(`../images/scenes/${ScenesArray[id].src}`),
            imgAlt: ScenesArray[id].name,
        });
    }

    prevPicture() {
        let id = this.state.imgId === 0 ? ScenesArray.length - 1 : this.state.imgId - 1;
        this.setState({
            imgId: id,
            imgSrc: require(`../images/scenes/${ScenesArray[id].src}`),
            imgAlt: ScenesArray[id].name,
        });
    }

    nextPicture() {
        let id = this.state.imgId === ScenesArray.length - 1 ? 0 : this.state.imgId + 1;
        this.setState({
            imgId: id,
            imgSrc: require(`../images/scenes/${ScenesArray[id].src}`),
            imgAlt: ScenesArray[id].name,
        });
    }

    render() {
        return (
            <div className="gallery">
                <div className="shadow"></div>
                <div className="gallery_close">
                    <i className="fas fa-times" onClick={() => this.props.closeImage()}></i>
                </div>
                <div className="gallery_image">
                    <div
                        className="arrow_holder"
                        style={{left: 0}}
                        onClick={() => this.prevPicture()}
                    >
                        <div className="arrow arrow-left"></div>
                    </div>
                    <img src={this.state.imgSrc} alt={this.state.imgAlt}/>
                    <div
                        className="arrow_holder"
                        style={{right: 0}}
                        onClick={() => this.nextPicture()}
                    >
                        <div className="arrow arrow-right"></div>
                    </div>
                </div>
                <div className="allScenery">
                    {ScenesArray.map(scene => {
                        let bg = require(`../images/scenes/${scene.src}`),
                            active = scene.id === this.state.imgId ? 'activeImg' : '';
                        return (
                            <div
                                className={`galleryItem ${active}`}
                                key={scene.id}
                                style={{
                                    background: `url(${bg}) center`,
                                    backgroundSize: 'cover',
                                }}
                                onClick={() => this.changeImage(scene.id)}

                            >
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}


export class Movie extends Component {
    state = {
        a: ', ',
        sceneId: 0,
        gallery: null,
    };

    ScenesSlideLeft() {
        let id = this.state.sceneId - 3 < 0 ? ScenesArray.length - 3 : this.state.sceneId - 3;
        this.setState({sceneId: id});
    }

    ScenesSlideRight() {
        let id = this.state.sceneId + 3 > ScenesArray.length - 1 ? 0 : this.state.sceneId + 3;
        this.setState({sceneId: id});
    }

    openImage(id) {
        this.setState({gallery: <Gallery closeImage={this.closeImage} imgId={id}/>})
    }

    closeImage = () => {
        this.setState({gallery: null});
    }

    render() {
        return(
            <div className="content">
                <div
                    className="trailer"
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <iframe
                        width="640"
                        height="480"
                        title="inception trailer"
                        src="https://www.youtube.com/embed/xitHF0IPJSQ"
                    ></iframe>
                </div>
                <div className="movie_about">
                    <div className="label">About</div>
                    <div className="movie_poster_desc">
                        <div
                            className="poster"
                            style={{
                                marginLeft: '100px',
                                width: '329.47px'
                            }}
                        >
                            <img alt="poster" src={require('../images/poster02.jpg')} />
                        </div>
                        <div>
                            <p>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.</p>
                        </div>
                    </div>
                    <div className="movie_moreInfo">
                        <ul>
                            <li>
                                <div className="movie_info_elem">Rating:</div>
                                <div>PG-13 (for sequences of violence and action throughout)</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">Genre:</div>
                                <div>Action & Adventure, Drama, Mystery & Suspense, Science Fiction & Fantasy</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">Directed By:</div>
                                <div>Christopher Nolan</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">Written By:</div>
                                <div>Christopher Nolan</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">In Theaters:</div>
                                <div>Jul 16, 2010 Wide</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">Box Office:</div>
                                <div>$292,568,851</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">Runtime:</div>
                                <div>148 minutes</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">Studio:</div>
                                <div>Warner Bros. Pictures</div>
                            </li>
                            <li>
                                <div className="movie_info_elem">Cast:</div>
                                <div>
                                    <Link to="/heroes#0">Leonardo DiCaprio</Link>
                                    {this.state.a}
                                    <Link to="/heroes#1">Joseph Gordon</Link>
                                    {this.state.a}
                                    <Link to="/heroes#2">Ellen Page</Link>
                                    {this.state.a}
                                    <Link to="/heroes#3">Tom Hardy</Link>
                                    {this.state.a}
                                    <Link to="/heroes#4">Ken Watanabe</Link>
                                    {this.state.a}
                                    <Link to="/heroes#5">Dileep Rao</Link>
                                    {this.state.a}

                                    <Link to="/heroes#6">Cillian Murphy</Link>
                                    {this.state.a}
                                    <br />
                                    <Link to="/heroes7#">Tom Berenger</Link>
                                    {this.state.a}
                                    <Link to="/heroes#8">Marion Cotillard</Link>
                                    {this.state.a}
                                    <Link to="/heroes#9">Pete Postlethwaite</Link>
                                    {this.state.a}
                                    <Link to="/heroes#10">Michael Caine</Link>
                                    {this.state.a}
                                    <Link to="/heroes#11">Lukas Haas</Link>
                                    {this.state.a}
                                    <Link to="/heroes#12">Talulah Riley</Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="movie_scenes">
                        <div className="label">Scenes</div>
                        <div className="arrow arrow-left" onClick={() => this.ScenesSlideLeft()}></div>
                        {
                            ScenesArray.map(scene => {
                                let bg = require(`../images/scenes/${scene.src}`);
                                if (scene.id >= this.state.sceneId && scene.id < this.state.sceneId + 3) {
                                    return (
                                        <div
                                            className="sceneItem"
                                            key={scene.id}
                                            style={{
                                                background: `url(${bg}) center`,
                                                backgroundSize: 'cover',
                                            }}
                                            onClick={() => this.openImage(scene.id)}

                                        >
                                            <div className="biggerImg biggerImg_right"></div>
                                            <div className="biggerImg biggerImg_left"></div>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })
                        }
                        <div className="arrow arrow-right" onClick={() => this.ScenesSlideRight()}></div>

                    </div>
                </div>
                <div className="movie_film">
                    <div className="label">Movie</div>
                    <iframe title="movie"></iframe>
                </div>
                {this.state.gallery}
            </div>
        );
    }
}

