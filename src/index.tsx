import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Store,{useGlobal} from './store/store'
import { useRoutes } from 'hookrouter';
import routes from './Routing';
const Index = () => {
  const routeResult = useRoutes(routes);
  const global = useGlobal();
  return (
    <React.StrictMode>
      <Store.Provider value={global}>
        {routeResult}
      </Store.Provider>

    </React.StrictMode>
  )
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
