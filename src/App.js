import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Splash from "./Splash"
import Login from "./login/Login"
import { AuthorizationContext } from './hooks/useAuthHook';
import RequiredAuth from "./RequiredAuth"
import Nav from "./Nav"
import ShortwaveDash from './shortwaveDash/ShortwaveDash';
import Radioshackle from './radioshackleDash/radioshackleDash';
import Dash from "./dash/Dashboard"
import SwLogEditForm from './shortwaveDash/SwLogEditForm';
function App() {
  const Test = () => <div>Test</div>

  return (
    <div className="App">
      <AuthorizationContext>
        <Nav />
        <Routes>
          <Route exact path='/' element={<RequiredAuth> <Dash /></RequiredAuth>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dash" element={<RequiredAuth>  <Dash /></RequiredAuth>} />
          <Route exact path="/shortwave" element={<RequiredAuth><ShortwaveDash /></RequiredAuth>} />
          <Route exact path="/radioshackle" element={<RequiredAuth><Radioshackle /></RequiredAuth>} />
        </Routes>
      </AuthorizationContext>
    </div >
  );
}

export default App;
