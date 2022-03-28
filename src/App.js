
import './App.css';
import Chart from './components/Chart/Chart';
import NavBar from './components/NavBar/NavBar';
import PricingCard from './components/PricingCard/PricingCard';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Chart></Chart>
      <PricingCard></PricingCard>
      
    </div>
  );
}

export default App;
