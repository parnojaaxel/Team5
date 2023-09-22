const sheetID = '1OCmRrLGBJhnTRmIPsUZfJVXURup7PCSdVGnucY75U68';
const base = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQYsIQ08YQD2UsVpJ1JmW_n80bEI2gDwJmeMVHlO3JElegCwxTjBvpCTYaITmQObBURaMVCRVSzbzHa/pub?gid=0&single=true&output=csv`;
// const base = `https://docs.google.com/spreadsheets/d/${sheetID}/edit#gid=0/public/values?alt=json-in-script`;
const sheetName = 'Andmebaas';
let qu = 'SELECT B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V';
qu = 'Select * WHERE B contains "x" ';
const query = encodeURIComponent(qu); 
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded', init);

// console.log(data);

console.log();
const output = document.querySelector('.output');


function init() {
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            // console.log(rep);
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            console.log(jsData);
            // const colz = [];
            // jsData.table.cols.forEach((heading) => {
            //     if (heading.label) {
            //         colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
            //     }
            // })
            // jsData.table.rows.forEach((main) => {
            //     // console.log(main);
            //     const row = {};
            //     colz.forEach((ele, ind) => {
            //         //console.log(ele);
            //         row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
            //     })
            //     data.push(row);
            // })
            maker(data);
        })
}
