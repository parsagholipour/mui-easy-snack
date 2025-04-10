import React, { useContext, useState } from 'react';
import { _SnackContext } from './_SnackContext.js';
import { _ as _extends } from './cc-he3fHS3P.js';
import Snackbar from '@mui/material/Snackbar';

const useSnack = ()=>{
    const context = useContext(_SnackContext);
    if (!context) {
        throw new Error('useSnack must be used within SnackProvider');
    }
    return context;
};

const SnackProvider = ({ children })=>{
    const [snacks, setSnacks] = useState([]);
    const [keyCounter, setKeyCounter] = useState(0);
    const defaultOptions = {
        autoHideDuration: 4000,
        variant: 'info'
    };
    const show = (message, options = {})=>{
        const key = keyCounter;
        setSnacks([
            ...snacks,
            {
                key,
                message,
                options: _extends({}, defaultOptions, options)
            }
        ]);
        setKeyCounter(keyCounter + 1);
    };
    const removeSnack = (key)=>{
        setSnacks(snacks.filter((snack)=>snack.key !== key));
    };
    return /*#__PURE__*/ React.createElement(_SnackContext.Provider, {
        value: {
            show
        }
    }, children, snacks.map((snack)=>/*#__PURE__*/ React.createElement(Snackbar, _extends({
            key: snack.key,
            open: true,
            message: snack.message,
            onClose: ()=>removeSnack(snack.key)
        }, snack.options))));
};

export { SnackProvider, useSnack };
