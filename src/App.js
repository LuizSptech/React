import './App.css';

function App() {

  const title = "Bem vindo ao meu blog"
  const likes = 50;
  const link = "https://github.com/LuizSptech"
  //const person = {name: 'luiz', age: 18}
  return (
    <div className="App">
    <div className="content">
      <h1>{title}</h1>
      <p>Liked {likes} times </p>
      {/*{name} = person*/}

    
    <a href="{link}">Github</a>
    </div> 
    </div>
  );
}

export default App;
