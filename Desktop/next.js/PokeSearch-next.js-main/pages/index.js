import PokemonDisplay from "../components/PokemonDisplay"

export default function Index({ data }) {
    const results = data.results
    return(
        <PokemonDisplay results={results}/>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
    const json = await res.json()
    const data = json

    return {
        props: {
            data
        }
    }
} 