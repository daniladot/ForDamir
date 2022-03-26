import React from 'react';
import styles from './Pokemon.module.scss'
import classNames from "classnames/bind";

let cx = classNames.bind(styles)

function Pokemon(props) {
    return (
        <div className={cx('Poke', props.CurName)}>
            <img src={props.url} alt=""/>
            <p>{props.name}</p>
        </div>
    );
}

export default Pokemon;
