const loggerMiddleware = () => (next: any) => (action: any) => {
  console.log('Dispatching:', action);
  return next(action);
};

export default loggerMiddleware;