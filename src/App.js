import GlobalStyles from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import FrontSection from 'components/Front/FrontSections';
import ProjectsSection from 'components/Projects/ProjectsSections';
import AboutSection from 'components/About/AboutSection';
import ContactSection from 'components/Contact/ContactSection';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <FrontSection scrollId="start" />
    <ProjectsSection scrollId="projects" />
    <AboutSection scrollId="about" />
    <ContactSection scrollId="contact" />
  </ThemeProvider>
);

export default App;
