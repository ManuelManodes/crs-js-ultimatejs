function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Manuel');

console.log(user);

function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, 'Lunita');
console.log(user1);

function returned() {
    return function() {
        console.log('Hola mundo desde mac');
    }
}

let saludo = returned();
saludo();