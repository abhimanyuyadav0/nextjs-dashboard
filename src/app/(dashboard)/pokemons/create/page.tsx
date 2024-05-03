import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import PokemonForm from '@/components/Pokemon/PokemonForm';

export default function Page() {
  return (
    <Card>
      <CardHeader title="Add new Pokémon" />
      <CardContent>
        <PokemonForm />
      </CardContent>
    </Card>
  );
}
