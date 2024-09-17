import {transports, format} from 'winston'
const { combine, timestamp, label, printf } = format;

// Format the log message
const msgFormat = printf(({ level, message, timestamp }) => {
    return `${level}: ${timestamp} : ${message}`;
  });

export const options = (scenarioName:string) =>{

    // Logging is routed to a file
    return {
        transports: [
            new transports.File({
              filename: `./test-results/logs/${scenarioName}.log`,
              level: 'info',
              format : msgFormat
            })]
    }
}