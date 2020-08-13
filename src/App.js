import React from 'react'
import Produto from './Produto';
import './App.css'

const App = () => {

  const [dados, setDados] = React.useState(null);

  async function handleClick( event ) {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);

    const json = await response.json();
    setDados(json);
  }

  return (
    <div className="container">
      
     <div className="groupButtons">
        <button className="button" onClick={handleClick}>notebook</button>
        <button className="button" onClick={handleClick}>tablet</button>
        <button className="button" onClick={handleClick}>smartphone</button>
     </div>
    

      {dados && 
       <div className="produto">
        <Produto  dados={dados}/>
     </div>
       } 

    </div>
  )
}

export default App
