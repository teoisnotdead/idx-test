import { useState } from "react"
import { Card } from "./components/Card"
import { useFetch } from "./hooks/useFetch"

export const TestingApp = () => {
    const { data, isLoading, hasError } = useFetch('https://dragonball-api.com/api/characters')

    const [characters, setCharacters] = useState([])

    if (isLoading) return <div>Loading...</div>;
    if (hasError) return <div>Error loading data</div>;

    return (
        <>
            {data?.items?.map(({ id, name, image, race, ki }) => 
                    {
                        return <Card key={id} name={name} image={image} race={race} ki={ki} />
                    }
                )}
            
        </>


    )
}
