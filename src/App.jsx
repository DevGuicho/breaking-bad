import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Conetendor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer;
`;

const App = () => {
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const data = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const resultado = await data.json();
    setFrase(resultado[0]);
  };
  useEffect(() => {
    consultarAPI();
  }, []);
  return (
    <Conetendor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener frase</Boton>
    </Conetendor>
  );
};

export default App;
