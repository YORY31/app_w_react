import { useState } from "react";

function  Sumadora(){
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return(
    <div>
      <h2>Sumadora</h2>
      <input type="number" value={a} onChange={e => setA(+e.target.value)}/>
      <br/>
      <br/>
       <input type="number" value={b} onChange={e => setB(+e.target.value)}/>
      <br/>
      <br/>
      
      <button onClick={() => alert(`El resultado es: ${a + b} 🫣`)}>SUMAR</button>
       
    </div>
  );
}

export default Sumadora;