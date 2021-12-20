import chalk from 'chalk';

// at some point we will want to redirect this
// but for now, we are just going to write to the log
const write = console.log;

const warning = chalk.yellow;
const error = chalk.bold.red;

export default {
  log: (message?: any, ...optionalParams: any[]) => {
    write(message, ...optionalParams);
  },

  warning: (message?: any, ...optionalParams: any[]) => {
    write(warning(message), ...optionalParams);
  },

  error: (message?: any, ...optionalParams: any[]) => {
    write(error(message), optionalParams);
  },
};
