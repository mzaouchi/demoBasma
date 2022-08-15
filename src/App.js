import './App.css';
import TestA from './Components/TestA';
import TestB from './Components/TestB';


function App() {
  const city = 'Lac'
  var age = 28
  var tab = ['France',"Tunise",'Italie']
  
  return (
    <div>
       <h1>Basma</h1>
       <h2>Mahmoud</h2>
       <TestA city={city} tab={tab}/>
       <TestB age={age}/>
    </div>
   
  );
}

export default App;
