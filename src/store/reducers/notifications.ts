import {
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION,
  SET_MESSAGE,
  SET_CLASSNAME,
} from '../actions/types';
import { initialStateForNotifications } from '../../types/types';

const initialState: initialStateForNotifications = {
  opacity: 0,
  timer: undefined,
  message: 'Notification',
  className: 'success',
};

export default function notificationReducer(state = initialState, action: any) {
  switch (action.type) {
    case HIDE_NOTIFICATION:
      return {
        ...state,
        opacity: 0,
      };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        opacity: 1,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case SET_CLASSNAME:
      return {
        ...state,
        className: action.className,
      };
    default:
      return state;
  }
}
