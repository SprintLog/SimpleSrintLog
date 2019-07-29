import {combineReducers , createStore,applyMiddleware,compose} from 'redux';

import thunk from 'redux-thunk';
const mylogger = store => next => action =>{
    console.log("Log Action",action);
    next(action);
}

const middlewares = applyMiddleware(mylogger,thunk)
export default () => {
  const store = createStore(
    combineReducers({
     
       
   }),
   {},
   compose(
      middlewares
    )
  );

  return store;
};