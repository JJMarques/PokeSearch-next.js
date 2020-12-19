export default function IdPokemon({ data }) {
    console.log(data);
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

    let paths = []
    for (let i = 1; i < data.count; i++) {
        paths[i] = { params: { id: i.toString() }}
    }

    return {
        paths,
        fallback: false
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