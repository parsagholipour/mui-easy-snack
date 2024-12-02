import React, {createContext} from "react";
import { SnackbarProps } from '@mui/material/Snackbar';

export const SnackContext = createContext<{
  show: (message: React.ReactNode, options?: SnackbarProps) => void;
}>({
  show: () => {},
});