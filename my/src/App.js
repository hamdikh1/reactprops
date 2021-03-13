import './App.css';
import Greeting from './profile/Profile component'




function App() {
  return (
    <div className="App">
      <Greeting fullName ="sarah clair" bio=" Student" profession="  ingenieur "/>
      <br/>
    <img  src={require('./image/goodpic.jpg').default} ></img>
    </div>
  );
}



export default App;
