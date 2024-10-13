// Tipos Basicos de TypeScript

let age: number = 20;
const firstname: string = 'Paulo';
const isAdult: boolean = true;
let idk: any = 'idk';

idk = 20;
idk = true;

const listaNumber: number[] = [1, 2, 3, 4, 5]; 
const listaString: string[] = ['a', 'b', 'c', 'd', 'e'];
const ListaBoolean: boolean[] = [true, false, true, false];

// Tuplas

const person: [string,number] = ['Paulo', 20];
const people: [string, number][] = [['Paulo', 20], ['João', 30], ['Maria', 40]];

// intersection

const produtoId: string | number | boolean = 123;

// Enum

enum Direction{
    up = 1,
    down = 2,
    left = 3,
    right = 4
}

const direction = Direction.up;

// type assertion

const produtoName: any = "Tenis Nike Bacana"

// let itemId = produtoName as string;
const itemId = <string>produtoName;