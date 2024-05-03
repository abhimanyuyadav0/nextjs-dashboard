'use client'

import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";
import PokemonList from "@/components/Pokemon/PokemonList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Card, CardContent } from "@mui/material";

export default function Index(props: any) {
  const { pokemonResource, page, perPage, sort, order } = props;
  const [resource, setResource] = useState<any>();
  const [loading, setLoading] = useState(false);

  return (
    <Card variant='outlined'>
      <CardContent>
        <div>Pokémon</div>
        <div className='mb-3 text-end'>
          <Button
            variant="contained"
            color="success"
            // onClick={() => router.push("/pokemons/create")}
            disabled={loading}
          >
            <FontAwesomeIcon icon={faPlus} fixedWidth />
            Add new
          </Button>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* <Pagination meta={resource.meta} /> */}
            <PokemonList pokemons={resource?.data} />
            {/* <Pagination meta={resource.meta} /> */}
          </>
        )}
      </CardContent>
    </Card>
  );
}
