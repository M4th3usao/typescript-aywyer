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

myFunction;

const appVoid: HTMLElement = document.getElementById('app.void');
appVoid.innerHTML = `
<h1>Void</h1>
<h2>unusable: ${unusable}</h2>
<h2>myFunctio: ${myFunction}</h2>
`;
