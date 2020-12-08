
const url = 'https://cors-anywhere.herokuapp.com/https://messaging.bandwidth.com/api/v2/users/9900921/messages'
export function sendMessage(){

    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/xml",
            "authorization" : 'Basic ZHNvbG93aXR6OkphY2thbmRDYXNoMTI='
        },
        body: { "applicationId": "27e1fb83-e0a3-46d7-b410-c9f06ecc05db" ,
        "to": ["+17602720260"],
        "from": "+17604417191",
        "text": "Hey, check this out!"}
    })
    .then(data=>data.json)
}