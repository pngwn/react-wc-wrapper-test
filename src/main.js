import { App } from './App';
import { helper } from './wc-helper';


const wc = helper(App);

customElements.define('react-test', wc)