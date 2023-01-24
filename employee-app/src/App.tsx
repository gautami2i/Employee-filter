import './App.scss';
import EmployeeInfo from './components/EmployeeInfo';
import Navigation from './navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const App = () => {

  return (
    <div className="wrapper">
      <Navigation/>

      <EmployeeInfo />
     

    </div>
  );
}
export default App;
