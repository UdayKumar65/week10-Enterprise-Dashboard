import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAppDispatch } from '../app/hooks/useAppDispatch';
import { setData } from '../features/dashboard/slices/dashboardSlice';

export const useWebSocket = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('dashboard-data', (data) => {
      dispatch(setData(data));
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};