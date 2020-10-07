import {
  SET_STATE_FROM_INPUTS,
  START_FETCHING,
  STOP_FETCHING,
  SEND_DATA,
} from '../actions/types';
import { notify } from 'containers/NotificationContainer';
import { delay } from 'helpers';
import axios from 'axios';
import { IBlankState } from 'types/types';

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

export function sendData(data: IBlankState) {
  return async (dispatch: any) => {
    try {
      dispatch(startFetching());
      await delay(1000);
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/cvs`, {
        data,
      });
      dispatch(stopFetching());
      dispatch(sendDataAction(res));
      notify('Your CV will be considered by our recuiters', 'success');
    } catch (e) {
      dispatch(stopFetching());
      notify('Form sending error', 'error');
      console.error(e);
    }
  };
}
