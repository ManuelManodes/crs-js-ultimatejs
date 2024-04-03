/**
 * Crear un algoritmo que devuelva un array
 * de objetos en base a pares
 */
let pairs = [
    [1, {name: "Tutita"}],
    [2, {name: "Almibita"}],
    [3, {name: "Ñuñita"}],
];

let array = [{
    id: 1,
    name: 'Tutita',
}, {
    id: 2,
    name: 'Almibita',
}, {
    id: 3,
    name: 'Ñuñita',
}];

function toCollection(arr){
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    
    return collection;
}
let resultado = toCollection(pairs);
console.log(resultado);