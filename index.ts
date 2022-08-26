// Import stylesheets
import './style.css';

let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2> List: ${list}</h2>
<h2>Other List: ${otherList}</h2>
`;

let me: [String, number];

me = ['Matheus', 20];

const appTuple: HTMLElement = document.getElementById('app.tuple');
appDiv.innerHTML = `
<h1>Tuple</h1>
<h2>Me chamo ${me[0]} e tenho ${me[1]} anos</h2>
`;
