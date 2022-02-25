import GlobalStyles from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <h1>Hello Sebastian</h1>
  </ThemeProvider>
);

export default App;
