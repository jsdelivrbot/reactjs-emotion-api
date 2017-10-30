
import axios from 'axios';


export const FETCH_PLAYSCRIPT   = 'FETCH_PLAYSCRIPT';
export const FETCH_EMOTIONTDATA = 'FETCH_EMOTIONTDATA';
export const FETCH_COUNTER      = 'FETCH_COUNTER';
export const INCREMENT_COUNTER  = 'INCREMENT_COUNTER';

const user = 'c98f5be9-7695-4dfb-9fb9-e3d1cd6cb541';
const password = 'NyAkK8Mhf4ul';
const playUrl = 'src/data/henry_iv.json';
const gatewayStr = '@gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&text='

let counter = 0;

export function incrementCounter() {
    return {
        type: INCREMENT_COUNTER,
        payload: { counter:  ++counter }
    };
}

export function fetchCounter() {
    return {
        type: FETCH_COUNTER,
        payload: { counter }
    };
}

export function fetchPlayData() {
    const response = axios.get( playUrl );
    return {
        type: FETCH_PLAYSCRIPT,
        payload: response
    };
}

export function fetchEmotionData( text ) {
//    const url = `http://${ user }:${ password }${ gatewayStr }${ encodeURI( text ) }&features=sentiment,keywords&keywords.sentiment=true&keywords.emotion=true`
//    const response = axios.get( url );

    // ^^^^^^^ ABOVE NOT WORKING ^^^^^^^^^^^

    //simulate Watson Emotion API response
    function getNum( n ) {
        return ( Math.floor( Math.random() * n + 1 ) );
    }
    function getEmotionVal( n ) {
        return getNum( n ) / n
    }
    let m, sadness = [], joy = [], fear = [], disgust = [], anger = [];
    m = getNum( 20 );
    for ( let i = 0; i < m; ++i )
        sadness.push( getEmotionVal( 1000 ) );
    m = getNum( 20 );
    for ( let i = 0; i < m; ++i )
        joy.push( getEmotionVal( 1000 ) );
    m = getNum( 20 );
    for ( let i = 0; i < m; ++i )
        fear.push( getEmotionVal( 1000 ) );
    m = getNum( 20 );
    for ( let i = 0; i < m; ++i )
        disgust.push( getEmotionVal( 1000 ) );
    m = getNum( 20 );
    for ( let i = 0; i < m; ++i )
        anger.push( getEmotionVal( 1000 ) );
    const response = { data: { sadness, joy, fear, disgust, anger } };

    return {
        type: FETCH_EMOTIONTDATA,
        payload: response
    };
}
