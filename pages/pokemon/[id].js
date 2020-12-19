import { useRouter } from 'next/router'

export default function IdPokemon({ data }) {
    const router = useRouter()
    console.log(data);

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return(
        <div>
            {data.name}
            {data.id} 
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const json = await res.json()
    const data = json

    return {
        paths: [
            {params: { id: "1" }}
        ],
        fallback: true
    }
}

export async function getStaticProps(ctx) {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ctx.params.id}`)
    const json = await res.json()
    const data = json

    return {
        props: {
            data
        }
    }
}