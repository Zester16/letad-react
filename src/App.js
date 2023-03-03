import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Splash from "./Splash"
import Login from "./login/Login"
import { AuthorizationContext } from './hooks/useAuthHook';
import RequiredAuth from "./RequiredAuth"
import Nav from "./Nav"
import ShortwaveDash from './shortwaveDash/ShortwaveDash';
import Radioshackle from "./radioshackleDash/RadioshackleDash"
import Dash from "./dash/Dashboard"
import SwLogEditForm from './shortwaveDash/SwLogEditForm';
import AddRadioshackleStation from './radioshackleDash/AddRadioShackleStation';
import ShowAllStations from './radioshackleDash/ShowAllStations';
import RadioShackleIndividualRadioInfo from './radioshackleDash/RashIndividualStationInfo';
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
          <Route exact path="/shortwave" element={<RequiredAuth><ShortwaveDash /></RequiredAuth>} >

          </Route>
          <Route exact path="/radioshackle" element={<RequiredAuth><Radioshackle /></RequiredAuth>} >
            <Route exact path="add" element={<AddRadioshackleStation />} />
            <Route exact path="stations" element={<ShowAllStations />} />
            <Route exact path="check-a-station" element={<Test />} />
            <Route exact path="stations/:id" element={<RadioShackleIndividualRadioInfo />} />
          </Route>
        </Routes>
      </AuthorizationContext>
    </div >
  );
}

export default App;
