//@ts-nocheck
import React from 'react';
import { Wrapper, ButtonsDiv, Button } from './styles';
import NavBar from 'components/NavBar';
import { notify } from 'containers/NotificationContainer';

const NotificationsPage: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <h4>Reuseable notification component.</h4>
      <ButtonsDiv>
        <Button
          className="waves-effect waves-light btn success"
          onClick={() => notify('This thing was done successfull', 'success')}
        >
          Success
        </Button>
        <Button
          className="waves-effect waves-light btn warning"
          onClick={() =>
            notify('I should warn you that smth may be wrong', 'warning')
          }
        >
          Warning
        </Button>
        <Button
          className="waves-effect waves-light btn error"
          onClick={() => notify('Error. something gone wrong.', 'error')}
        >
          Error
        </Button>
      </ButtonsDiv>
    </Wrapper>
  );
};

export default NotificationsPage;
