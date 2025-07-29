import React, { useEffect, useState } from 'react';

export default function ContadorPalabras() {
  const [text, setTexto] = useState<string>(''); 
  const [contadorLetras, setContadorLetras] = useState<number>(0);  
  const [color, setColor] = useState<string>('yellow');

  useEffect(() => {
    const cantidadLetras = text.length;

    if (cantidadLetras > 50) {
      setColor('red');
    } else if (cantidadLetras > 10) {
      setColor('green');
    } else {
      setColor('yellow');
    }

    setContadorLetras(cantidadLetras);
  }, [text]);

  function asignarTexto(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTexto(e.target.value);
  }

  return (
    <div>
      <textarea
        rows={10}
        cols={30}
        placeholder="Ingrese texto"
        value={text}
        onChange={asignarTexto}
        style={{ color }}
      />
      <br />
      Cantidad de letras = {contadorLetras}
    </div>
  );
}
