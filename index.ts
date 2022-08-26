// Import stylesheets
import './style.css';

//Arrays:

let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app.array');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2> List: ${list}</h2>
<h2>Other List: ${otherList}</h2>
`;

//Tuples

let me: [String, number];

me = ['Matheus', 20];

const appTuple: HTMLElement = document.getElementById('app.tuple');
appTuple.innerHTML = `
<h1>Tuple</h1>
<h2>Me chamo ${me[0]} e tenho ${me[1]} anos</h2>
`;

//Enum
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const appEnum: HTMLElement = document.getElementById('app.enum');
appEnum.innerHTML = `
<h1>Enumerated Types</h1>
<h2>Cor 1: ${color}</h2>
<h2>Cor 2: ${color2}</h2>
`;

//Any

let notSure: any = 4;
notSure = 'Maybe I am a string';
notSure = false; //okay, definity  e boolean

const appAny: HTMLElement = document.getElementById('app.any');
appAny.innerHTML = `
<h1>Variable</h1>
<h2>${notSure}</h2>
`;

//Void

function warnUser(): void {
  console.log('This is my warning message');
}

let myFunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myFunction; //Executa a variável void sem retornar na tela

const appVoid: HTMLElement = document.getElementById('app.void');
appVoid.innerHTML = `
<h1>Void</h1>
<h2>unusable: ${unusable}</h2>
<h2>myFunctio: ${myFunction}</h2>
`;

//Object

declare function create(o: object | null): void;
create({ prop: 0 }); //Ok
create(null); //ok
//create(42); //Erro
//create('string'); //Erro
//create(false); // Erro
create(undefined); // Erro

/* SOMENTE ILUSTRAÇÃO
const appObject: HTMLElement = document.getElementById('app.object');
appObject.innerHTML = `
<h1>Object</h1>
`;
*/

let someValue: any = 'This is a string';
let striLenght: number = (<string>someValue).length;

let someValue2: any = 'This is a string';
let striLenght2: number = (someValue as string).length;

const appValue: HTMLElement = document.getElementById('app.value');
appValue.innerHTML = `
<h1>Type assertions</h1>
`;

//Function
function sum(h1: number, h2: number): number {
  return h1 + h2;
}

//pessoa é o nome do objeto
function fullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + ' ' + pessoa.lastname;
}

const appFunction: HTMLElement = document.getElementById('app.function');
appFunction.innerHTML = `
<h1>Function</h1>
<h2>Soma de 2 e 3: ${sum(2, 3)}</h2>
<h2>Soma de 11 e 329: ${sum(11, 239)}</h2>
<h2>MEu nome completo: ${fullName({
  lastname: 'Oliveira',
  name: 'Matheus',
})}</h2>
`;
