function crearUsuario(name, email){
    return  {
        email: email,
        name: name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Manuel','manuel@manuel.cl')
let user2 = crearUsuario('Alejandro','alejandro@alejandro.cl')

console.log(user1, user2)