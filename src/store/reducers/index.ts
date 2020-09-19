import { combineReducers } from 'redux';
import tableReducer from './table';
import formReducer from './form';
import notificationReducer from './notifications';

export default combineReducers({
  form: formReducer,
  table: tableReducer,
  notifications: notificationReducer,
});
