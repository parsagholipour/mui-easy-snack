import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import {SnackContext} from "./SnackContext.ts";
import { SnackbarProps } from '@mui/material/Snackbar';

export const SnackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [snacks, setSnacks] = useState<{ key: number; message: React.ReactNode; options: SnackbarProps }[]>([]);
  const [keyCounter, setKeyCounter] = useState<number>(0);

  const defaultOptions: SnackbarProps & any = {
    autoHideDuration: 4000,
    variant: 'info',
  };

  const show = (message: React.ReactNode, options: SnackbarProps = {}) => {
    const key = keyCounter;
    setSnacks([...snacks, { key, message, ...defaultOptions, ...options }]);
    setKeyCounter(keyCounter + 1);
  };

  const removeSnack = (key: number) => {
    setSnacks(snacks.filter((snack) => snack.key !== key));
  };

  return (
    <SnackContext.Provider value={{ show }}>
      {children}
      {snacks.map((snack) => (
        <Snackbar
          key={snack.key}
          open
          message={snack.message}
          onClose={() => removeSnack(snack.key)}
          {...snack.options}
        />
      ))}
    </SnackContext.Provider>
  );
};