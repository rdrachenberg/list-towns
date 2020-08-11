
let load = document.getElementById('btnLoadTowns');

load.addEventListener('click', function(){
    let input = document.getElementById('towns').value;

    console.log(input);

    let townsArray = input;
    let totalTownsArray = townsArray.split(', ');

    const townObj = {};
    
    for (const value of totalTownsArray) {
        townObj[value] = value;
    }
    
    let src = document.getElementById('towns-template').innerHTML;
    let template = Handlebars.compile(src);

    let container = document.getElementById('app');
    container.innerHTML = template({townObj});
    document.getElementById('towns').value = '';

});

