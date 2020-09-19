import {
  SET_STATE_FROM_INPUTS,
  START_FETCHING,
  STOP_FETCHING,
  SEND_DATA,
} from '../actions/types';
import { store } from './../../index';
import { notify } from '../../containers/NotificationContainer';

export function setStateFromInputs(key: string, value: any) {
  return {
    type: SET_STATE_FROM_INPUTS,
    payload: { key, value },
  };
}

function startFetching() {
  return {
    type: START_FETCHING,
  };
}
function stopFetching() {
  return {
    type: STOP_FETCHING,
  };
}
function sendDataAction(data: any) {
  return {
    type: SEND_DATA,
    data,
  };
}

export function sendData() {
  return async (dispatch: any) => {
    try {
      dispatch(startFetching());
      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
      await delay(2000);
      // fake sending to server
      const res: any = { data: store.getState() };
      dispatch(stopFetching());
      dispatch(sendDataAction(res.data));
      notify('Your form will be considered by our recuiters', 'success');
    } catch (e) {
      notify('Form saving error', 'error');
    }
  };
}
