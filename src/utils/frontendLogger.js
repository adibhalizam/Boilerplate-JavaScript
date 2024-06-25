const logLevels = ['error', 'warn', 'info', 'debug'];
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const frontendLogger = logLevels.reduce((logger, level) => {
  logger[level] = (message, ...args) => {
    // Log to console
    console[level](message, ...args);
    
    // Send log to backend
    fetch(`${API_URL}/api/log`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level,
        message,
        args,
      }),
    }).catch(error => console.error('Failed to send log to server:', error));
  };
  return logger;
}, {});

export default frontendLogger;