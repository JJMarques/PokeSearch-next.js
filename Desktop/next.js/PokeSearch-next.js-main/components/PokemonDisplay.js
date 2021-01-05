import styles from '../styles/PokemonDisplay.module.scss'
import PokemonCard from './PokemonCard'

export default function PokemonDisplay({ results }) {   
    return(
        <div className={styles.PokemonDisplay}>
            <div className={styles.PokemonDisplayContainer}>
                {results.map(v => (
                    <PokemonCard result={v} key={v.url} />
                ))}
            </div>
        </div>
    )
}