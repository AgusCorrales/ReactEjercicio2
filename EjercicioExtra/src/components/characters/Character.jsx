import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'  

const Character = () => {
    const [printCharacter, setPrintCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people")
        .then(response=>{
            console.log(response.data.results);
            setPrintCharacter(response.data.results);
            setLoading(false)
        })
        .catch(error=>{
            console.error("Error al cargar resultados",error);
            setLoading(false)
        })
        
    },[])
    if (loading) {
        return <p>Cargando...</p>
    }
  return (
    <div>
        <h1>Personajes de Star Wars</h1>
        {printCharacter.map(character => (
        <p key={character.name}>{character.name}</p>
    ))}
    </div>
);
}

export default Character