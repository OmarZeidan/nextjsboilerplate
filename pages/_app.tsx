import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../utils/theme.config';

class MyApp extends App {
  public render() {
    const { Component } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Page>
            <Component />
          </Page>
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
