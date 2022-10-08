import { useSelector,useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

function App() {
 const counter = useSelector((state) => state.counter);
 const dispatch = useDispatch();

 function increment(){
  dispatch(actions.increment());
 }

 function decrement(){
  dispatch(actions.decrement());
 }

 function addBy(){
  dispatch(actions.addBy(10));
 }

  return (
    

      <div className='counter__app'>
        <h1>Counter App</h1>
        <h2>{counter}</h2>

        <div className="button">
        <button className="counter__button increment" onClick={increment} >+ </button>
        <button className='counter__button decrement' onClick={decrement}>-</button>
        <button className='counter__button add' onClick={addBy}>+10</button>
      </div>

      </div>
 
  );
}

export default App;
