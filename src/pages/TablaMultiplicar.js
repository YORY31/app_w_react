import { useState } from "react";

function TablaMultiplicar() {
  const [num, setNum] = useState(1);

  return (
    <div>
      <h2>Tabla de Multiplicar</h2>
      <input type="number" value={num} onChange={e => setNum(+e.target.value)} />
      <ul>
        {[...Array(13).keys()].map(i => (
          <li key={i}>{num} × {i} = {num * i}</li>
        ))}
      </ul>
    </div>
  );
}

export default TablaMultiplicar;