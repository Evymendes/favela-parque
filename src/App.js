import './App.css';
import Routes from "./routes";

import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
            <Route path="/" exact={true} component={Home} />
            {/* <Route path="/sobre" component={Sobre} /> */}
    </ BrowserRouter>
  );
}

export default App;
