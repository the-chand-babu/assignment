
import './App.css';
import {Provider} from 'react-redux'
import { store,userSlice } from './store';
import Todo from './component/Todo';
import CountApp from './component/counter';

function App() {
  return (
    <div className="App">

      <Provider store ={store} >
        <Todo />
        <CountApp />  
      </Provider>
     
    </div>
  );
}

export default App;
