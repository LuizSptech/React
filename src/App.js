import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = "Bem vindo ao meu blog"
  const likes = 50;
  const link = "https://github.com/LuizSptech"
  //const person = {name: 'luiz', age: 18}
  return (
    <div className="App">
      <Navbar/>
    <div className="content">
      <Home/>
    </div> 
    </div>
  );
}

export default App;
