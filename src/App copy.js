import './App.css';
import Header from './components/Header';
import List from './components/List';
import Table from './components/Table';

function App() {
  const headingState = ['1h', '2h', '3h', '4h'];
  const rowState = [['1r', '2r', '3r', '4r'], ['1g', '2g', '3g', '4g'], ['1b', '2b', '3b', '4b'], ['1y', '2y', '3y', '4y']];
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <List />
        <div >
          <Table 
            heading={headingState} 
            row={rowState} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
