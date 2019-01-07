import React, {Component}  from 'react';

export const HeroesArray = [
    {
        id: 0,
        name: 'Leonardo DiCaprio',
        as: 'Dom Cobb',
        src: 'Leonardo_DiCaprio.jpg',
        decs: 'Leonardo DiCaprio as Dom Cobb, a professional thief who specializes in conning secrets from his victims by infiltrating their dreams. DiCaprio was the first actor to be cast in the film. Nolan had been trying to work with the actor for years and met him several times, but was unable to convince him to appear in any of his films until Inception. Both Brad Pitt and Will Smith were offered the role, according to The Hollywood Reporter. Cobb\'s role is compared to "the haunted widower in a Gothic romance".'
    },
    {
        id: 1,
        name: 'Joseph Gordon',
        as: 'Arthur',
        src: 'Joseph_Gordon.jpg',
        decs: 'Joseph Gordon-Levitt as Arthur, Cobb\'s partner who manages and researches the missions. Gordon-Levitt compared Arthur to the producer of Cobb\'s art, "the one saying, \'Okay, you have your vision; now I\'m going to figure out how to make all the nuts and bolts work so you can do your thing\'". The actor did all of his stunts but one scene and said the preparation "was a challenge and it would have to be for it to look real". James Franco was in talks with Christopher Nolan to play Arthur, but was ultimately unavailable due to scheduling conflicts.',
    },

    {
        id: 2,
        name: 'Ellen Page',
        as: 'Ariadne',
        src: 'Ellen_Page.jpg',
        decs: 'Ellen Page as Ariadne, a graduate student of architecture who is recruited to construct the various dreamscapes, which are described as mazes. The name Ariadne alludes to a princess of Greek myth, daughter of King Minos, who aided the hero Theseus by giving him a sword and a ball of string to help him navigate the labyrinth which was the prison of the Minotaur. Nolan said that Page was chosen for being a "perfect combination of freshness and savvy and maturity beyond her years". Page said her character acts as a proxy to the audience, as "she\'s just learning about these ideas and, in essence, assists the audience in learning about dream sharing".'
    },

    {
        id: 3,
        name: 'Tom Hardy',
        as: 'Eames',
        src: 'Tom_Hardy.jpg',
        decs: 'Tom Hardy as Eames, a sharp-tongued associate of Cobb. He is referred to as a fence but his specialty is forgery, more accurately identity theft. Eames uses his ability to impersonate others inside the dream world in order to manipulate Fischer. Hardy described his character as "an old, Graham Greene-type diplomat; sort of faded, shabby, grandeur – the old Shakespeare lovey mixed with somebody from Her Majesty\'s Special Forces", who wears "campy, old money" costumes.'
    },

    {
        id: 4,
        name: 'Ken Watanabe',
        as : 'Mr.Saito',
        src: 'Ken_Watanabe.jpg',
        decs: 'Ken Watanabe as Mr. Saito, a Japanese businessman who employs Cobb for the team\'s mission. Nolan wrote the role with Watanabe in mind, as he wanted to work with him again after Batman Begins. Inception is Watanabe\'s first work in a contemporary setting where his primary language is English. Watanabe tried to emphasize a different characteristic of Saito in every dream level: "First chapter in my castle, I pick up some hidden feelings of the cycle. It\'s magical, powerful and then the first dream. And back to the second chapter, in the old hotel, I pick up [being] sharp and more calm and smart and it\'s a little bit [of a] different process to make up the character of any movie".'
    },

    {
        id: 5,
        name: 'Dileep Rao',
        as: 'Yusuf',
        src: 'Dileep_Rao.jpg',
        decs: 'Dileep Rao as Yusuf. Rao describes Yusuf as "an avant-garde pharmacologist, who is a resource for people, like Cobb, who want to do this work unsupervised, unregistered and unapproved of by anyone". Co-producer Jordan Goldberg said the role of the chemist was "particularly tough because you don\'t want him to seem like some kind of drug dealer", and that Rao was cast for being "funny, interesting and obviously smart".'
    },

    {
        id: 6,
        name: 'Cillian Murphy',
        as: 'Robert Michael Fischer',
        src: 'Cillian_Murphy.jpg',
        decs: 'Cillian Murphy as Robert Michael Fischer, the heir to a business empire and the team\'s target. Murphy said Fischer was portrayed as "a petulant child who\'s in need of a lot of attention from his father, he has everything he could ever want materially, but he\'s deeply lacking emotionally". The actor also researched the sons of Rupert Murdoch, "to add to that the idea of living in the shadow of someone so immensely powerful".'
    },

    {
        id: 7,
        name: 'Tom Berenger',
        as: 'Peter Browning',
        src: 'Tom_Berenger.jpg',
        decs: 'Tom Berenger as Peter Browning, Robert Fischer\'s godfather and fellow executive at the Fischers\' company. Berenger said Browning acts as a "surrogate father" to Robert, who calls the character "Uncle Peter", and emphasized that "Browning has been with [Robert] his whole life and has probably spent more quality time with him than his own father".'
    },

    {
        id: 8,
        name: 'Marion Cotillard',
        as: 'Mal Cobb',
        src: 'Marion_Cotillard.jpg',
        decs: 'Marion Cotillard as Mal Cobb, Dom\'s deceased wife. She is a manifestation of Dom\'s guilt about the real cause of Mal\'s suicide. He is unable to control these projections of her, challenging his abilities as an extractor.[14] Nolan described Mal as "the essence of the femme fatale," and DiCaprio praised Cotillard\'s performance saying that "she can be strong and vulnerable and hopeful and heartbreaking all in the same moment, which was perfect for all the contradictions of her character".'
    },

    {
        id: 9,
        name: 'Pete Postlethwaite',
        as: 'Maurice Fischer',
        src: 'Pete_Postlethwaite.jpg',
        decs: 'Pete Postlethwaite as Maurice Fischer, Robert Fischer\'s father and the dying founder of a business empire.'
    },

    {
        id: 10,
        name: 'Michael Caine',
        as: 'Professor Stephen Miles',
        src: 'Michael_Caine.jpg',
        decs: 'Michael Caine as Professor Stephen Miles, Cobb\'s mentor and father-in-law, and Ariadne\'s college professor who recommends her to the team.'
    },

    {
        id: 11,
        name: 'Lukas Haas',
        as: 'Nash',
        src: 'Lukas_Haas.jpg',
        decs: 'Lukas Haas as Nash, an architect in Cobb\'s employment who betrays the team and is later replaced by Ariadne.',
    },

    {
        id: 12,
        name: 'Talulah Riley',
        as: 'woman whom Eames disguises himself as in a dream',
        src: 'Talulah_Riley.jpg',
        decs: 'Talulah Riley as a woman whom Eames disguises himself as in a dream. Riley liked the role, despite it being minimal: "I get to wear a nice dress, pick up men in bars, and shove them in elevators. It was good to do something adultish. Usually I play 15-year-old English schoolgirls."'
    },
];

class Hero extends Component {
    state = {
        HeroesArray: [],
    }

    async componentWillMount() {
        this.setState({
            HeroesArray: HeroesArray,
        })
    }

    // componentDidMount() {
    //     console.log(this.props.match.params.id);
    // }

    render() {
        // let id = this.props.match.params.id;
        let id = this.props.id;
        let {HeroesArray} = this.state;

        return(
            <div className="heroes_persons">
                <div className="label heroes_label">{HeroesArray[id].name} <span style={{textTransform: 'uppercase'}}
                >as {HeroesArray[id].as}</span></div>
                <div className="personImage"><img
                    src={require(`../images/heroes/${HeroesArray[id].src}`)}
                    alt={HeroesArray[id].name}
                /></div>
                <div className="personInfo"><p>{HeroesArray[id].decs}</p></div>

            </div>
    );
    }
}

class Heroes extends Component {
    state = {
        person: null,
        HeroesArray: [],
        id: null,
    };

    changePerson(id, e) {
        let array = document.getElementsByClassName('heroes_heroImg'),
            active = false;
        if (e.target.className === 'heroes_heroImg person_active') {
            active = true;
        }
        for (let el of array) {
            el.className = 'heroes_heroImg person_nonActive';
            el.parentNode.style.zIndex = 1;
        }
        if (active) {
            this.setState({person: null});
        }
        else if (e.target.className === 'heroes_heroImg person_nonActive') {
            e.target.className = 'heroes_heroImg person_active';
            e.target.parentNode.style.zIndex = 2;
            this.setState({person: <Hero id={id} />});
        }
    }

    componentDidMount() {
        // location "/"

        // let location = this.props.location.pathname.split('/'),
        //     id = parseInt(location[location.length - 1]);
        //
        // if (Number.isInteger(id)) {
        //     this.setState({person: <Hero id={id} />, id: id });
        // }

        // location "#"

        // if (this.props.location.hash) {
        //     // let id = HeroesArray[decodeURI(this.props.location.hash.substring(1))].id;
        //     let id = decodeURI(this.props.location.hash.substring(1));
        //     this.setState({person: <Hero id={id} />, id: id });
        // }
    }

    // async componentWillMount() {
    //     this.setState({
    //         HeroesArray: HeroesArray,
    //     })
    // }

    render() {
        return(
            <div className="content" style={{marginBottom: '50px'}}>
                <div className="label">Cast</div>
                <div
                    className="heroes_heroesList"
                    style={{
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: '60px',
                        height: 'auto',
                        position: 'relative',
                    }}
                >
                    {
                        HeroesArray.map(hero =>  {
                            let bg = require(`../images/heroes/${hero.src}`),
                            active = hero.id == this.state.id ? 'heroes_heroImg person_active' : 'heroes_heroImg person_nonActive';
                            return(
                                <a href={`#${hero.id}`} key={hero.id} onClick={(e) => this.changePerson(hero.id, e)} style={active === 'heroes_heroImg person_active' ? {zIndex: 10} : {zIndex: 1}}>
                                    <div
                                        className={active}
                                        style={{
                                            background: `url(${bg})`,
                                            height: '100px',
                                            width: '100px',
                                            transition: '0.8s',
                                        }}
                                    >
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                {this.state.person}
            </div>
        );
    }

}

export default Heroes;
