import React, { useEffect, useState } from 'react';
import { Container, Text, Button } from './styles';
import axios from 'axios'

function API() {
  const [joke, setJoke] = useState('')

  const createJoke = async () => {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
      headers: {'Accept': 'application/json'},
    })
    
    const jokeJson = await jokeRes.json();

    setJoke(jokeJson.joke)
  }

  useEffect(() => {
    createJoke()
  }, [])

  return (
    <Container>
      <h2>joke generator</h2>
      <Text>{joke}</Text>
      <Button onClick={() => createJoke()}>generate a new joke</Button>
    </Container>
  );
}

export default API;