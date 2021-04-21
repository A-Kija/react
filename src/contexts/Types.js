import { createContext } from 'react';

const Types = createContext(localStorage.getItem('bookTypes') ? JSON.parse(localStorage.getItem('bookTypes')) : []);

export default Types;