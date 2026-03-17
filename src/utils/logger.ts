import winston from 'winston';

const { combine, timestamp, printf, colorize, errors } = winston.format;

// Custom log format for cleaner output
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // handle stacks
    logFormat
  ),
  transports: [
    // Standard console transport
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }), // Colorize everything
        logFormat
      ),
    }),
    // Error log file in logs directory
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    // Combined log file for all info/debug messages
    new winston.transports.File({
      filename: 'logs/combined.log',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
});

export default logger;
