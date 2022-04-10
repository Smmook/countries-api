const form = document.getElementById('formulario');
const input = document.getElementById('inputFormulario');

const formularioCliente = data => {
    form.addEventListener('keyup', e => {
        e.preventDefault();
        const letraCliente = input.value.toLowerCase();
        // console.log(letraCliente);
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.common.toLowerCase();
            console.log(letraApi)
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item;
            }
        })
        pintarBanderas(arrayFiltrado);
        console.log(arrayFiltrado);
    });
}