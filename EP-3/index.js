import React from "react";
import ReactDOM from "react-dom/client"


//React Element
const JSXHeading = <h1>Header using JSX❄️</h1>

const Title = () =>  <h1>Naganandhini's Webpage</h1>

//Functional Component
const FunctionalComponent = () => (
  // return(
    <div id="container">
      <Title/> {/*Rendering Functional component/}
      <Title></Title>
      {Title()}
      {JSXHeading} {/*Rendering React element - INJECT ANY JS CODE INSIDE CURLY BRACES IN JSX*/}
      <h2 className="heading-2">Functional component 🌦️</h2>
    </div>
  // )
    
)

const root = ReactDOM.createRoot(document.getElementById("root"))
//Redering Function Component
root.render(<FunctionalComponent/>)