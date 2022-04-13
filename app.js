'use strict'

const xlabels = [];
const ytemps = [];

chartIt();


async function chartIt(){

    await getData();
    const ctx = document.getElementById('chart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Global Average Temperature',
                data: ytemps,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: true,}]
            },
        
    });
}



async function getData(){
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    //console.log(data);

    const rows = data.split('\n').slice(1);
    //console.log(rows);
    rows.forEach(element=>{
        const row = element.split(',');
        const year = row[0];
        xlabels.push(year);
        const temp = row[1];
        ytemps.push(parseFloat(temp) + 14);
        console.log(year, temp);
    })
}