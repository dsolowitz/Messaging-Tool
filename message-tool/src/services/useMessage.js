import {useState, useCallback} from 'react'


export const useMessage = () => {

    const [res, setResult] = useState();

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization' , 'Basic ZHNvbG93aXR6LXVzZXItcm9sZTpKYWNrYW5kQ2FzaDEy')

    var jBody = {
      "from": "+17022141170",
      "to": "+17602720260",
      "text": "demo 0x35 \ud83d\ude0e",
      "applicationId": "e61f681d-292a-4fc4-8d16-f412ff8de497",
      "tag": "PUT YOUR NAME / TICKET NUMBER HERE"
      }


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body : JSON.stringify(jBody),
      }

      const sendMessage = () => {
      fetch("https://cors-anywhere.herokuapp.com/https://messaging.bandwidth.com/api/v2/users/9900921/messages", requestOptions)
      .then(response => response.text())
      .then(result => setResult(result))
      .catch(error => console.log('error', error))
    }


    return  {
      sendMessage,
      res
    }

   }
       