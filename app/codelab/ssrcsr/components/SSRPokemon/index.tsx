'use client'

import { useState } from 'react';

// Server-side rendered component
export default function SSRPokemon({ pokemonName, initialIndex }: { pokemonName: string; initialIndex: number }) {
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [name, setName] = useState(pokemonName);

    // Function to handle Next/Previous button clicks
    const handleChangePokemon = async (index: number) => {
        setLoading(true); // Show loading spinner
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            // Fetch new Pokémon data from server-side
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
            const data = await response.json();
            setName(data.name); // Set the new Pokémon name
            setCurrentIndex(index);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        } finally {
            setLoading(false); // Hide loading spinner
        }
    };

    return (
        <div>
            <h1>Example Pokémon SSR Page</h1>
            {loading ? <p>Loading...</p> : <p>Pokémon: {name}</p>}

            <div className="flex flex-row gap-4">
                <button onClick={() => handleChangePokemon(currentIndex - 1)} disabled={currentIndex <= 1}>
                    Previous
                </button>
                <button onClick={() => handleChangePokemon(currentIndex + 1)}>Next</button>
            </div>
        </div>
    );
}

// This gets called on every request (SSR)
export async function getServerSideProps(context: any) {
    // Get the index from query or default to 1 (first Pokémon)
    const index = context.query.index ? parseInt(context.query.index, 10) : 1;

    // Fetch Pokémon data from the PokeAPI
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();

    return {
        props: {
            pokemonName: data.name, // Send the Pokémon name to the page as a prop
            initialIndex: index, // Send the current index
        },
    };
}
