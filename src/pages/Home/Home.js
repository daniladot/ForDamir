import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss'
import Pokemon from "../../components/Pokemon/Pokemon";
import classNames from "classnames/bind";
import {Link, useParams} from "react-router-dom";

let cx = classNames.bind(styles)

function Home(props) {

    const [pokArr, setPokArr] = useState([])

    // useEffect(() => {
    //     const pok1 = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //     const pok2 = fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    //     const pok3 = fetch('https://pokeapi.co/api/v2/pokemon/beedrill')
    //     const pok4 = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //
    //     Promise.all([pok1, pok2, pok3, pok4])
    //         .then(res => {
    //             const PromisePokArr = []
    //             res.forEach(async elem => {
    //                 const response = await elem.json()
    //                 PromisePokArr.push(response)
    //                 setPokArr(PromisePokArr)
    //             })
    //         })
    // }, [])

    useEffect(async () => {
        const PokPromis = []

        let pok1 = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        pok1 = await pok1.json()
        PokPromis.push(pok1)

        let pok2 = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        pok2 = await pok2.json()
        PokPromis.push(pok2)

        let pok3 = await fetch('https://pokeapi.co/api/v2/pokemon/beedrill')
        pok3 = await pok3.json()
        PokPromis.push(pok3)

        let pok4 = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        pok4 = await pok4.json()
        PokPromis.push(pok4)

        await setPokArr(PokPromis)

    }, [])


    console.log('pokArr', pokArr)
    return (
        <div className={styles.Home}>
            <div>
                <Link to='/about'>Страница About</Link>
            </div>
            {pokArr.map(elem => {
                console.log(elem)
                return (
                    <Pokemon url={elem.sprites.front_default} name={elem.name}
                             CurName={cx('Home__background')}/>
                )
            })}
        </div>
    );
}

export default Home;
