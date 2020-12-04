import { observer } from "mobx-react";

// Styles
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import Routes from "./components/Routes";
// import NavBar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <NavBar /> */}
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
