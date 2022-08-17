import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import styled, {ThemeProvider} from 'styled-components';
import { darkMode, lightMode } from './utils/Mode';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`

const Wrapper = styled.div`
   padding: 22px 96px;
`

function App() {

  const [dark, setDark] = useState(true);

  return (
    <ThemeProvider theme={dark ? darkMode : lightMode}>
     <Container>
       <Router>
       <Menu dark={dark} setDark={setDark}/>
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/'>
                <Route index element={<Home/>}/>
                <Route path='video'>
                  <Route path=':id' element={<Video/>} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Router>
     </Container>
    </ThemeProvider>
  );
}

export default App;
