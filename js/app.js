const banderas = document.getElementById('banderas');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', e => {
    fetchData();
});

const fetchData = async() => {
    try {
        const res = await fetch('https://restcountries.com/v2/all');
        const data = await res.json();
        pintarBanderas(data);
        formularioCliente(data);
        filtros(data);
    } catch (error) {
        console.log(error);
    }
}

const pintarBanderas = data => {
    banderas.innerHTML = '';
    data.forEach(item => {
        const clone = template.cloneNode(true);
        clone.querySelector('img').src = item.flag;
        clone.querySelector('h3').textContent = item.name;
        clone.getElementById('population').textContent = item.population;
        clone.getElementById('capital').textContent = item.capital;
        clone.getElementById('region').textContent = item.region;
        fragment.appendChild(clone);
    });
    banderas.appendChild(fragment);
}