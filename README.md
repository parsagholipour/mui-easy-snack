# mui-easy-snack
A simple context-based Snackbar provider for React applications using MUI (Material-UI) Snackbars. This package allows you to easily display snackbars (notifications) from any component in your application.

## Installation
```bash
npm install mui-easy-snack
```
## Usage

#### Step 1: Wrap your application with SnackProvider
```jsx
import React from 'react';
import { SnackProvider } from 'mui-easy-snack';
import { ThemeProvider, theme } from '@mui/material'; // Adjust the import based on your theme setup
import YourApp from './YourApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackProvider>
        <YourApp />
      </SnackProvider>
    </ThemeProvider>
  );
}

export default App;
```
#### Step 2: Use the Snackbar context in your components
```jsx
import React from 'react';
import { Button } from '@mui/material';
import { useSnack } from 'mui-easy-snack';

function ExampleComponent() {
  const snack = useSnack();

  return (
    <Button onClick={() => snack.show('This is a Snackbar!')} variant="contained">
      Show Snackbar
    </Button>
  );
}

export default ExampleComponent;
```
#### Step 3: Customize Snackbar options (Optional)
```jsx
snack.show('Success message!', {
  variant: 'success',
  autoHideDuration: 3000,
  action: (
    <Button size="small" color="inherit" onClick={() => /* some action */}>
      UNDO
    </Button>
  ),
});
```

### License

This project is licensed under the MIT License - see the LICENSE file for details.