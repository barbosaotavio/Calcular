import React, { useState } from 'react'

const Calculadora = () => {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcularSoma = () => {
    setResultado(numero1 + numero2)
  }

  return (
    <div>
      <h1>Calculadora</h1>

      <div>
       Numero 1:<input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
        placeholder="digite um número"
      />
      </div>
    

    <div>
     Numero 2:<input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
        placeholder="digite outro número"
      />
    </div>
     
      <button onClick={calcularSoma}>Calcular Soma</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  )
}




export default Calculadora
