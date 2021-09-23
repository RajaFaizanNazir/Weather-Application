
import { Container } from '@material-ui/core';
import axios from 'axios';
import './App.css';
import FetchData from './Components/FetchData/FetchData';
import Header from './Components/Header/Header';
import './index.css'

/* function app */
function App() {  
  return (
    <div className="App" >
    <Container
    maxWidth="md" style = {{display: "flex", flexDirection: "column", height: "100vh"}}>
      
    <FetchData></FetchData>
    
    </Container>
    </div>
  
  );
}
export default App;
