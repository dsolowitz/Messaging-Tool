import './App.css';
import {useMessage} from './services/useMessage'
import {useEffect } from 'react'

function App() {

 const {
  sendMessage,
  res
 } = useMessage()

  useEffect(() => {
    sendMessage()
  }, [])

  return (
    <div className="App">
      {res}
    </div>
  );
}

export default App;
