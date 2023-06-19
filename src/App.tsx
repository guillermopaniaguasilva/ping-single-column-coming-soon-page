import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ComingSoon from './pages/ComingSoon';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComingSoon />
    </ThemeProvider>
  );
};

export default App;
