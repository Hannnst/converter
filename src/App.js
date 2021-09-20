import React from "react";
import "./style.css";

// Create a euro to dollar (and viceversa) convertor. It needs to take the input from one component and then render the converted value from a child component.

// It is up to you which component does the actual conversion...

// Extra:
// - Use an external API to get real exchanges rates, you can use this one: https://currencylayer.com/
// (they will ask you to register and will give you a free plan and an api key)

// > Use js fetch to get the data from the API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// ```
// fetch(`http://www.apilayer.net/api/live?access_key=${your_api_key_here}`)
// .then( res => res.json())
// .then( response => console.log(response))
// .catch( error => console.log(error))
// ```
// > In case of errors about CORS , check this link : https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

// ***Your solution goes to the ex02 folder***


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
