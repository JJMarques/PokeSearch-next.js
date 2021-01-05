import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
    return(
        <div className={styles.nav}>
            <h1>PokeSearch</h1>
            <h3>Powered by</h3>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeapi" />
        </div>
    )
}