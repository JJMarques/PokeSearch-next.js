import styles from '../styles/PokemonDisplay.module.scss' //Same as PokemonDisplay.js
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function PokemonCard({ result }) {

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async (r) => {
            const result = await axios(
                r.url
            )
            setPokemon(result.data);
            setLoading(false)
        }
       
          fetchData(result)
    }, [])

    return(
        <>
            {
                loading ?
                    (<div className={styles.PokemonCard}>
                        <h4>Loading...</h4> 
                    </div>) 
                :
                    (<Link href={`pokemon/${pokemon.id}`}>
                        <div className={styles.PokemonCard}>
                            <img src={pokemon.sprites.front_default} alt={pokemon.forms[0].name}/>
                            <h4>{pokemon.forms[0].name}</h4>
                        </div>
                    </Link>
                    )
            } 
        </>
    )
}