import './App.css';
import {sendMessage} from './services/sendMessage'
import {useEffect , useState} from 'react'

function App() {

  const [res, setResult] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic ZGVyZWsuZm91cm5pZXJAbWV0aXMuY29tcGFueTpBMTk1MkBtYy4wMQ==");
myHeaders.append("Cookie", "BIGipServer~iris~Shared~dashboard.bandwidth.com-portal_pool=83993610.37151.0000; JSESSIONID=8CDDC5E56943F343D43B934688B077AE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://dashboard.bandwidth.com/api/accounts/5005876/sites/30358/sippeers/604785/tns", requestOptions)
  .then(response => response.text())
  .then(result => setResult(result))
  .catch(error => console.log('error', error));
  })
  return (
    <div className="App">
      {res}
    </div>
  );
}

export default App;
