//@ts-nocheck
import React, { Component } from 'react';
import ee from 'event-emitter';
import Notification from '../components/Notification';
import {
  hideNotification,
  showNotification,
  setMessage,
  setClassName,
} from '../store/actions/notifications';
import { connect } from 'react-redux';

const emitter = new ee();

export const notify = (message: string, className: string) => {
  emitter.emit('notification', message, className);
};

class NotificationsContainer extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);

    this.timer = null;

    emitter.on('notification', (message: string, className: string) => {
      this.onShow(message, className);
    });
  }

  showNotif = (message: string, className: string) => {
    this.props.setMessage(message);
    this.props.setClassName(className);
    this.props.showNotification();
    this.timer = setTimeout(() => this.props.hideNotification(), 4000);
  };

  onShow = (message: string, className: string) => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.props.hideNotification();
      setTimeout(() => this.showNotif(message, className), 1000);
    } else {
      this.showNotif(message, className);
    }
  };

  render() {
    return (
      <Notification
        text={this.props.message}
        className={this.props.className}
        opacity={this.props.opacity}
      />
    );
  }
}

function mapStateToProps(state: any) {
  return {
    opacity: state.notifications.opacity,
    message: state.notifications.message,
    className: state.notifications.className,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    hideNotification: () => dispatch(hideNotification()),
    showNotification: () => dispatch(showNotification()),
    setMessage: (message: string) => dispatch(setMessage(message)),
    setClassName: (className: string) => dispatch(setClassName(className)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer);

type PropsType = {
  hideNotification: () => void;
  setMessage: (message: string) => void;
  setClassName: (className: string) => void;
  showNotification: () => void;
  opacity: number;
  message: string;
  className: string;
};
