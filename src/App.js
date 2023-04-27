import AdminLogin from "./Components/Administrator/Administrator/AdminLogin"
import Dashboard from "./Components/Administrator/Administrator/Dashboard";
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Home from "./Components/UserInterface/Home";
import VehicleDetails from "./Components/UserInterface/VehicleDetails";
import VehicleDetailComponent from "./Components/UserInterface/VehicleDetailComponent";
import OtpInterface from "./Components/UserInterface/MyComponents/OtpInterface";
import PaymentGateway from "./Components/UserInterface/PaymentGateway";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        
        <Route element={<Home/>} path="/home" />
        <Route element={<VehicleDetails/>} path="/vehicledetails" />
        <Route element={<AdminLogin/>} path="/" />
        <Route element={<Dashboard/>} path="/dashboard/*" />
        <Route element={<VehicleDetailComponent/>} path="/vehicledetailcomponent"/>
        <Route element={<PaymentGateway/>} path="/paymentgateway"/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
