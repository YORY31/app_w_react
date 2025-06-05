
import React, { useState } from "react";

function Traductor() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const unidades = [
    "", "uno", "dos", "tres", "cuatro", "cinco",
    "seis", "siete", "ocho", "nueve"
  ];

  const especiales = [
    "diez", "once", "doce", "trece", "catorce", "quince",
    "dieciséis", "diecisiete", "dieciocho", "diecinueve"
  ];

  const decenas = [
    "", "", "veinte", "treinta", "cuarenta", "cincuenta",
    "sesenta", "setenta", "ochenta", "noventa"
  ];

  const centenas = [
    "", "ciento", "doscientos", "trescientos", "cuatrocientos",
    "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"
  ];

  const convertirNumero = (num) => {
    if (num === 0) return "cero";
    if (num === 100) return "cien";
    if (num === 1000) return "mil";

    let texto = "";

    const c = Math.floor(num / 100);
    const d = Math.floor((num % 100) / 10);
    const u = num % 10;

    if (c > 0) texto += centenas[c] + " ";

    if (d === 1 && u > 0) {
      texto += especiales[u];
    } else if (d === 2 && u > 0) {
      texto += "veinti" + unidades[u];
    } else {
      if (d > 1) texto += decenas[d];
      if (d > 1 && u > 0) texto += " y ";
      if (d !== 1) texto += unidades[u];
    }

    return texto.trim();
  };

  const manejarTraduccion = () => {
    const num = parseInt(numero);
    if (isNaN(num) || num < 1 || num > 1000) {
      setResultado("Por favor, introduce un numero entre 1 y 1000.");
    } else {
      setResultado(convertirNumero(num));
    }
  };

  return (
    <div>
      <h2>Traductor de Numeros a Letras (1 - 1000)</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Escribe un número"
      />
      <button onClick={manejarTraduccion}>Traducir</button>
      <p><strong>Resultado:</strong> {resultado}</p>
    </div>
  );
}

export default Traductor;
