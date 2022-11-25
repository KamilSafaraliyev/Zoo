interface AnimalType{
    nameOfAnimal: string;
    biome :string;
    reservoir:boolean;
    area:number;
    food:string;
    predatorOr: boolean;
}

interface Animal extends AnimalType {
name: string;
age: number;
amountOfFood: number;
}

interface  Settlement{
    animals:Animal[];
    biome:string;
    reservoir:boolean;
    capacity:number;
    predator:boolean;
}

let Wolf:Animal={
    nameOfAnimal: 'wolf',
    biome: 'forest',
    reservoir: false,
    area: 120,
    food: 'meat',
    predatorOr: true,
    name: 'Tutu',
    age: 1,
    amountOfFood: 4

}
let Panda:Animal={
    nameOfAnimal: 'panda',
    biome: 'forest',
    reservoir: false,
    area: 70,
    food: 'banana',
    predatorOr: false,
    name: 'Titi',
    age: 8,
    amountOfFood: 6

}

let Giraffe :Animal={
    nameOfAnimal: 'giraffe',
    biome: 'forest',
    reservoir: true,
    area: 120,
    food: 'grass',
    predatorOr: false,
    name: 'Lili',
    age: 9,
    amountOfFood: 15

}

let Cat:Animal={
    nameOfAnimal: 'cat',
    biome: 'home',
    reservoir: true,
    area: 40,
    food: 'milk',
    predatorOr: false,
    name: 'Lulu',
    age: 1,
    amountOfFood:4
}

let Monkey:Animal={
    nameOfAnimal: 'monkey',
    biome: 'forest',
    reservoir: true,
    area: 60,
    food: 'fruit',
    predatorOr: false,
    name: 'Otto',
    age: 3,
    amountOfFood: 7
}

let Fish:Animal={
    nameOfAnimal: 'fish',
    biome: 'sea',
    reservoir: true,
    area: 60,
    food: 'palnt',
    predatorOr: false,
    name: 'Koko',
    age: 4,
    amountOfFood: 5
}

let cageForwolf :Settlement={
    animals: [],
    biome: 'forest',
    reservoir: false,
    capacity: 140,
    predator: true
}

function CheckCage(animal: Animal, cage: Settlement){
let count:number=0;
 if(animal.reservoir==cage.reservoir && animal.biome==cage.biome && animal.predatorOr==cage.predator){

 for(let j=0; j<cage.animals.length; j++){
    count+=1;
 }

 if(cage.capacity>count){
    cage.animals.push(animal);


 }
 else{
    console.log("there are not enough space in this cage");  
}
}
else{
console.log(`This cage is not available for  -${animal.name}-  animal`);
}
}
  function PutAnimalsInside (cage:Settlement){
    for(let i=0; i<cage.animals.length;i++){
        console.log(cage.animals[i].name);
    }
  }
  CheckCage(wolf, cageForWolf);
  CheckCage(panda, cageForWolf);
  CheckCage(giraffe, cageForWolf);
  CheckCage(cat, cageForWolf);
  CheckCage(monkey, cageForWolf);
  CheckCage(fish, cageForWolf);
  PutAnimalsInside(cageForWolf);

export{}