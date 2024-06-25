import React, { useEffect } from 'react';
import frontendLogger from '../utils/frontendLogger';

const ExampleComponent = () => {
  useEffect(() => {
    frontendLogger.error('Test error log from frontend');
    frontendLogger.warn('Test warning log from frontend');
    frontendLogger.info('Test info log from frontend');
    frontendLogger.debug('Test debug log from frontend');
    frontendLogger.info('ExampleComponent mounted');
    return () => {
      frontendLogger.info('ExampleComponent unmounted');
    };
  }, []);

  const handleClick = () => {
    frontendLogger.info('Button clicked in ExampleComponent');
  };

  return (
    <div>
      <h1>Example Component</h1>
      <button onClick={handleClick}>Log Click</button>
    </div>
  );
};

export default ExampleComponent;