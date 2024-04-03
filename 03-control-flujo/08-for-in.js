let user = {
    id: 1,
    name: 'manolito',
    age: 34,
};

for (let prop in user){
    console.log(prop, user[prop]);
}

let animales = ['almibita','ñuñita','tutita'];
for (let indice in animales){
    console.log(indice, animales[indice]);

}