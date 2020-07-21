import React from 'react';
import { StyleSheet } from 'react-native';
import PlacesNavigator from './navigation/PlacesNavigator';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import placesReducer from './store/reducers/places';
import { init } from './helper/db';

init().then(() => {
  console.log("Initialized database")
}).catch((err) => {
  console.log("Initializing database failed");
  console.log(err)
});

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App()  {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});