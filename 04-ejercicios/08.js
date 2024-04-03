/**
 * Crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */
let array = [{
    id: 1,
    name: 'Ñuñita',
},{
    id: 2,
    name: 'Almibita',
},{
    id: 3,
    name: 'Tutita',
}];

let pares = [
    [1, { id: 1, name: "Ñuñita"}],
    [2, { id: 2, name: "Almibita"}],
    [3, { id: 3, name: "Tutita"}],
];

function toPairs(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);