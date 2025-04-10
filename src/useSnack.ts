import { useContext } from 'react';
import { _SnackContext } from './_SnackContext.ts';

export const useSnack = () => {
  const context = useContext(_SnackContext);
  if (!context) {
    throw new Error('useSnack must be used within SnackProvider');
  }
  return context;
};
