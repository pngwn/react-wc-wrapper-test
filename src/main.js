import { App } from './App';
import { helper, helper_two} from './wc-helper';

const wc = helper(App);
const wc_two = helper_two(App);

customElements.define('react-test', wc)
customElements.define('react-test-two', wc_two)