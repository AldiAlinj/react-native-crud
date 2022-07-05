import { useState } from "react";

const url = 'http://192.168.1.50:8000/api/posts/'

export const GetData = async ({endpoint, method, headers, body}) => {

    let requestData = {
        method: method, 
        headers: headers,
        body: body
    }

    return await fetch(url + endpoint, requestData)
    .then((res) => {
        const statusCode = res.status;
        const data = res.json();
        return Promise.all([statusCode, data]);
    })
    .then(([statusCode, data]) => {
        return{response: data, status: statusCode}
    })
    .catch((err) => {
        return err;
    })
}


export const CreateData = async ({endpoint, method, body}) => {
    fetch(url + endpoint, {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:
            body
        
      });
}

  
