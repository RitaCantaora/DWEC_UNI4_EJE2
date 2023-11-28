
let listaCreada = false;

function agregarElemento() {
    const valorInput = document.getElementById('inputText').value;
    if (valorInput != ' ') {

        const lista = obtenerLista();

        const nuevoElemento = document.createElement('li')
        nuevoElemento.textContent = valorInput;
        const nuevoAtributo = document.createAttribute('miAtributo');
        nuevoAtributo.value = 'nuevoVal';
        nuevoAtributo.value = 'nuevoVal';
        nuevoElemento.setAttributeNode(nuevoAtributo);
        lista.appendChild(nuevoElemento);

        document.getElementById('inputText').value = '';
    } else {
        alert('Por favor, ingresa un valor válido.');
    }
}

function obtenerLista() {
    let lista = document.getElementById('lista');

    if (!listaCreada) {
       
        lista = document.createElement('ul');
        lista.id = 'lista';
        document.querySelector('.container').appendChild(lista);
        listaCreada = true;
    }

    return lista;
}
