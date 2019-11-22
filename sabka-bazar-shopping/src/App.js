import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
//import Home from './components/home';
import HomeContainer from './containers/home/index';
import Login from './components/login';
import Register from './components/register';
import plp from './components/plp';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { homeSaga } from './containers/home/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(homeSaga);

function App(){
  return (
    <Provider store={store}>
    <Router>
      <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/plp" component={plp} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
