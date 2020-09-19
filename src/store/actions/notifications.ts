import {
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION,
  SET_MESSAGE,
  SET_CLASSNAME,
} from './types';

export function hideNotification() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
export function showNotification() {
  return {
    type: SHOW_NOTIFICATION,
  };
}
export function setMessage(message: string) {
  return {
    type: SET_MESSAGE,
    message,
  };
}
export function setClassName(className: string) {
  return {
    type: SET_CLASSNAME,
    className,
  };
}
