import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const url = "192.168.1.2:3000/agreements/rentout/pdf";
  const info = {
    owner: {
      name: "Janusz",
      surname: "Korsar",
      pesel: "999999999",
      address: {
        country: "Poland",
        province: "Dolnośląskie",
        city: "Wrocław",
        street: "Innowrocławska",
        house: "19",
        appartment: "26",
        zip: "51-500",
      },
    },
    rentees: [
      {
        name: "Ihor",
        surname: "Panasenko",
        pesel: "999999999",
        address: {
          country: "Poland",
          province: "Dolnośląskie",
          city: "Wrocław",
          street: "Innowrocławska",
          house: "19",
          appartment: "26",
          zip: "51-500",
        },
      },
      {
        name: "Andrii",
        surname: "Horlanov",
        pesel: "999999999",
        address: {
          country: "Poland",
          province: "Dolnośląskie",
          city: "Wrocław",
          street: "Innowrocławska",
          house: "19",
          appartment: "26",
          zip: "51-500",
        },
      },
    ],
    address: {
      country: "Poland",
      province: "Dolnośląskie",
      city: "Wrocław",
      street: "Innowrocławska",
      house: "19",
      appartment: "26",
      zip: "51-500",
    },
    amountCaution: 5555200,
    amountPayment: 105500,
    periodFrom: "3018-12-10T13:49:51.141Z",
    periodMonths: 12,
    bankAccount: "asdasdas",
  };

  // function delay(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  // (async () => {
  //   const requestOptions: any = {
  //     method: "POST",
  //     mode: "no-cors",
  //     body: JSON.stringify(info),
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   };

  //   const response = await fetch(
  //     "http://localhost:3000/pdf-generator/rentout/pdf",
  //     requestOptions
  //   ).then(r => {
  //     r.
  //   })

  //   await delay(15000);

  //   console.log(response);
  // })();

  const requestOptions: any = {
    method: "POST",
    //mode: "no-cors",
    responseType: "text",
    body: JSON.stringify(info),
    headers: {
      Origin: "https://foo.example",
      Accept: "application/json",
    },
  };

  async function logJSONData() {
    const response = await fetch(url, requestOptions);
    const pdf = await response.text();
    console.log(pdf);
    const element = document.getElementById("pdf");
    if (element != null) {
      element.innerText = pdf;
    }
  }

  return (
    <div className="App">
      <button onClick={logJSONData}>Fetch</button>
      <p id="pdf">Pdf goes here.</p>
    </div>
  );
}

export default App;
