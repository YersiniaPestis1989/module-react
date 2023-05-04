
import { createStore } from 'redux'

import reducter from './reduser';

const store = createStore(reducter);

export default store