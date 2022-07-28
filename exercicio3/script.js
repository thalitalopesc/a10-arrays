const arrayNumbers = [20, 40, 10, 90, 60];
const arrayFrutas = ['limao', 'banana', 'maca', 'ameixa', 'melancia'];
const arrayDogs = ['Lhasa apso', 'Poodle', 'Pitbull', 'Salsicha', 'Pug'];


// ADICIONE UM ITEM NA PRIMEIRA ARRAY

const copiaDoArrayNumbers = arrayNumbers.slice();
copiaDoArrayNumbers.push(80);

console.log(arrayNumbers, copiaDoArrayNumbers);

// REMOVA O ÚLTIMO ITEM DO SEGUNDO ARRAY

const copiaDoArrayFrutas = arrayFrutas.slice();
copiaDoArrayFrutas.splice(4,1);

console.log(arrayFrutas);
console.log(copiaDoArrayFrutas);

// REMOVA O SEGUNDO ITEM DO TERCEIRO ARRAY

const copiaDoArrayDogs = arrayDogs.slice();
copiaDoArrayDogs.splice(1,1);

console.log(arrayDogs, copiaDoArrayDogs);

