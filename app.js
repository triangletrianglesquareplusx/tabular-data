'use strict'

//no more globals
// const xlabels = [];
// const ytemps = [];

chartIt();


async function chartIt(){

    const data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in Celsius',
                data: data.ys,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: true,}]
            },
        
    });
}



async function getData(){

    const xs = [];
    const ys = [];
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    //console.log(data);

    const rows = data.split('\n').slice(1);
    //console.log(rows);
    rows.forEach(element=>{
        const row = element.split(',');
        const year = row[0];
        xs.push(year);
        const temp = row[1];
        ys.push(parseFloat(temp) + 14);
        //console.log(year, temp);
    })
    //could we return an object?
    return {xs, ys};
}