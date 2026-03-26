import ReduxProvider from './ReduxProvider';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default AppProvider;