// eventually we will make this more robust, this is a simple
// stub to get the routing right

export default {
  log: (message?: any, ...optionalParams: any[]) => {
    console.log(message, ...optionalParams);
  },

  warning: (message?: any, ...optionalParams: any[]) => {
    console.warn(message, ...optionalParams);
  },

  error: (message?: any, ...optionalParams: any[]) => {
    console.error(message, optionalParams);
  },
};
