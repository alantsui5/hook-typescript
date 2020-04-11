import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import GlobalHook from './store/store'
import { useRoutes } from 'hookrouter';
import routes from './routing';
const Index = () => {
  const routeResult = useRoutes(routes);
  return (
    <React.StrictMode>
      <GlobalHook.Provider>
        {routeResult}
      </GlobalHook.Provider>

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
