import React, {createContext} from "react";
import { SnackbarProps } from '@mui/material/Snackbar';

export const _SnackContext = createContext<{
  show: (message: React.ReactNode, options?: SnackbarProps) => void;
}>({
  show: () => {},
});
