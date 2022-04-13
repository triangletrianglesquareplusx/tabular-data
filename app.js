'use strict'

getData();

async function getData(){
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    console.log(data);
}