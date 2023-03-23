import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import FilterStore from './store/FilterStore';

import './style/style.sass';

type RootStateContextValue = {
  filter: FilterStore;
};

export const Context = createContext<RootStateContextValue>({} as RootStateContextValue);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    filter: new FilterStore()
  }}>
    <App />
  </Context.Provider>
);