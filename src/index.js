
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import React from 'react';
import Store from './redux/Store';
import { thunk_action_creator } from './redux/shopping/Shopping-action';


 
{/*const store = createStore(asyncReducer,applyMiddleware(thunk));

store.dispatch({
  type:'ADD_QUANTITY',
  payload:500
});
store.subscribe(()=>{
  console.log('value of state:',store.getState());
})*/}



Store.dispatch(thunk_action_creator());

ReactDOM.render(
  <React.StrictMode>
      <Provider store ={Store}>
        <App/>
     </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
