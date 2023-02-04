import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";

function App() {
  return <div> 
      <h1> My Todo</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Study Hard'/>
      <Modal />
      <Backdrop />
   </div>
}

export default App;
