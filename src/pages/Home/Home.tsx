import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const Home: React.FC = () => {
  const history = useHistory();

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        onClick={() => history.push('/dev-ui')}
        style={{ width: 300, height: 160, fontSize: 26, margin: '0 48px' }}
      >
        Dev UI
      </Button>
      <Button
        type="primary"
        onClick={() => history.push('/dev-data')}
        style={{ width: 300, height: 160, fontSize: 26, margin: '0 48px' }}
      >
        Dev Data
      </Button>
    </div>
  );
};
