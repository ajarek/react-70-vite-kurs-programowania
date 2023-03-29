import kursy from './assets/kursy.json'
import Lista from './components/Lista/Lista';
function App() {


  return (
    <div className="App">
    <Lista array={kursy} />
    </div>
  )
}

export default App
