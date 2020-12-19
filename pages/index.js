import { useEffect } from 'react'

export default function Index({ data }) {

    useEffect(() => {
        console.log(data)
    }, [])

    return(
        <div>
            dsaodji
        </div>
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