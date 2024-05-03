import { useEffect, useState } from 'react';
import { Typography, Card, CardHeader, CardContent } from '@mui/material';
import PokemonForm from '@/components/Pokemon/PokemonForm';

export default function Page({ params }: { params: { id: string } }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response:any = [];
        setPokemon(response.pokemon);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
    fetchPokemonData();
  }, [params]);

  if (!pokemon) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Card>
      <CardHeader title="Add new Pokémon" />
      <CardContent>
        <PokemonForm pokemon={pokemon} />
      </CardContent>
    </Card>
  );
}
