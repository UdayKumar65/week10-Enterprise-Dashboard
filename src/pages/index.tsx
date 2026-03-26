import { useAppSelector } from '../../app/hooks/useAppSelector';
import { useWebSocket } from '../../hooks/useWebSocket';

const Dashboard = () => {
  useWebSocket();
  const data = useAppSelector((state) => state.dashboard.data);

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default Dashboard;