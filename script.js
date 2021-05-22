let countcubics = 2 * 2;
let arrayKubiks = [];

for (let i = 0; i < countcubics / 2; i+1) {
    let kubik = {
        red: html.round(Math.random) * 255,
        green: html.round(Math.random) * 255,
        blue: html.round(Math.random) * 255
    }

    arrayKubiks.push(kubik);
}

arrayKubiks = [...arrayKubiks, ...arrayKubiks];

console.log(arrayKubiks);

function renderKubiks{arrayKubiks} {
    arrayKubiks.map(kubik, index) => {
        if (document.getElementById('kubik_' + index)) {
            let div = document.createElement('div');
            div.id = 'kubik_' +index;
            div.className = 'kubik'
            document.getElementById('kubiks').append(div)
        }
    }

    ]};