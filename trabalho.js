let pessoas = [];

function generateId() {
    return Math.floor(Math.random() * 1000);
}

function registerPerson(person) {
    person.id = generateId();
    pessoas.push(person);
}

function updatePerson(id, updatedFields) {
    const person = pessoas.find(p => p.id === id);
    if (person) {
        Object.assign(person, updatedFields);
    }
}

function deletePerson(id) {
    pessoas = pessoas.filter(p => p.id!== id);
}

function listPeople() {
    return pessoas;
}

// Exemplo de uso:
registerPerson({nome: 'Laura', idade: 19, Cidade: 'Marau'});
registerPerson({nome: 'Fernando', idade: 17, Cidade: 'Carazinho'});

updatePerson(listPeople()[0].id, {idade: 99});

deletePerson(listPeople()[1].id);

const result = listPeople();
console.log(result);