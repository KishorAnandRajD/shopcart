import { combineReducers } from 'redux';
import ProductsReducer from './products_reducer';


const rootReducer = combineReducers({
  productsList:ProductsReducer,
});

export default rootReducer;
