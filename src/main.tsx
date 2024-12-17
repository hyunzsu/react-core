import App from './App';
import './main.css';

const virtualDOM = App();

console.log('Virtual DOM Structure:');
console.log(JSON.stringify(virtualDOM, null, 2));
