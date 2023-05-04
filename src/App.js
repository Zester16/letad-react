import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from "./views/login/Login"
import { AuthorizationContext } from './hooks/useAuthHook';
import RequiredAuth from "./RequiredAuth"
import Nav from "./views/navbar/Nav"
import ShortwaveDash from './views/shortwaveDash/ShortwaveDash';
import RadioshackleHolder from "./views/radioshackleDash/RadioshackleHolder"
import Dash from "./views/dash/Dashboard"
import RadioShackleDash from "./views/radioshackleDash/Dash"
import AddRadioshackleStation from './views/radioshackleDash/AddRadioShackleStation';
import ShowAllStations from './views/radioshackleDash/ShowAllStations';
import RadioShackleIndividualRadioInfo from './views/radioshackleDash/RashIndividualStationInfo';
import CheckAStation from './views/radioshackleDash/CheckAStation';
import RadioShackleDownloadStation from './views/radioshackleDash/RadioShackleDownloadStation';
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
          <Route exact path="/radioshackle" element={<RequiredAuth><RadioshackleHolder /></RequiredAuth>} >
            <Route exact path="dash" element={<RadioShackleDash />} />
            <Route exact path="add" element={<AddRadioshackleStation />} />
            <Route exact path="stations" element={<ShowAllStations />} />
            <Route exact path="check-a-station" element={<CheckAStation />} />
            <Route exact path="stations/:id" element={<RadioShackleIndividualRadioInfo />} />
            <Route exact path="/radioshackle/download-station" element={<RadioShackleDownloadStation />} />

          </Route>
        </Routes>
      </AuthorizationContext>
    </div >
  );
}

export default App;
