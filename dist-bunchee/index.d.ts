import React$1 from 'react';

declare const useSnack: () => {
    show: (message: React.ReactNode, options?: SnackbarProps) => void;
};

declare const SnackProvider: React$1.FC<{
    children: React$1.ReactNode;
}>;

export { SnackProvider, useSnack };
