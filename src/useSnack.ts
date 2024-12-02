import { useContext } from 'react';
import { SnackContext } from './SnackContext';

export const useSnack = () => {
  const context = useContext(SnackContext);
  if (!context) {
    throw new Error('useSnack must be used within SnackProvider');
  }
  return context;
};