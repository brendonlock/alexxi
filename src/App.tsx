import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Downloads } from './pages/Downloads';
import { GhostProductions } from './pages/Ghost-productions';
import { Home } from './pages/Home';
import { MixingMastering } from './pages/Mixing-mastering';
import * as themeConf from './theme';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './Theme-context';
import { useThemeDetector } from './components/ThemeComponent/theme-detection';
import { AdvancedPage } from './pages/advanced'

//@ts-ignore

function App (props) {
  
  const theme = useTheme();

  const Wrapper = styled.div`
    background-image: url(${themeConf.backgroundColor});
    color: ${themeConf.textColor};
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  `;

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
    {/* <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/mixing-mastering" element={<MixingMastering />} />
        <Route path="/ghost-productions" element={<GhostProductions />} />
        <Route path="/3d" element={<AdvancedPage />} />
     </Routes>
    </Wrapper> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/mixing-mastering" element={<MixingMastering />} />
        <Route path="/ghost-productions" element={<GhostProductions />} />
        <Route path="/3d" element={<AdvancedPage />} />
     </Routes>
  </ThemeProvider>
 );
}

export default App;