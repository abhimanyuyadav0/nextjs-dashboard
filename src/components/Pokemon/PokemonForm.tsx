'use client'
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import FormError from '@/components/Form/FormError';


export default function PokemonForm(props: any) {
  const { pokemon } = props;

  const defaultValues = ():any => {
    if (pokemon) {
      return {
        name: pokemon.name,
        types: pokemon.types,
        eggGroups: pokemon.egg_groups,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        special_attack: pokemon.special_attack,
        special_defense: pokemon.special_defense,
        speed: pokemon.speed,
      };
    }

    return {
      name: '',
      types: [],
      eggGroups: [],
      hp: null,
      attack: null,
      defense: null,
      special_attack: null,
      special_defense: null,
      speed: null,
    };
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    defaultValues: defaultValues(),
  });

  const [submitting, setSubmitting] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const onSubmit = async (data:any) => {
    setSubmitting(true);

    // Change to your real submit here
    const fakeSubmit = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1500);
      });

    const res = await fakeSubmit();

    setSubmitting(false);
    window.scrollTo(0, 0);

    if (res) {
      setNotificationMessage('Record saved successfully.');
      return;
    }

    setNotificationMessage('Unexpected error occurred, please try again.');
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Alert
        severity="success"
        sx={{ mb: 2 }}
        onClose={() => setNotificationMessage('')}
      >
        {notificationMessage}
      </Alert>

      {pokemon && (
        <Box
          className="position-relative mx-auto"
          sx={{
            width: 150,
            height: 150,
          }}
        >
          <Image
            fill
            style={{ objectFit: 'contain' }}
            alt={pokemon.pokemondb_identifier}
            sizes="5vw"
            src={`https://img.pokemondb.net/sprites/home/normal/2x/${pokemon.pokemondb_identifier}.jpg`}
          />
        </Box>
      )}

      <FormControl fullWidth sx={{ mb: 3 }}>
        <FormLabel>Name</FormLabel>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: 'This field is required' }}
          render={({ field }:any) => (
            <TextField
              {...field}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </FormControl>

      <Button
        className="me-3"
        type="submit"
        variant="contained"
        color="success"
        disabled={submitting}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => reset()}
      >
        Reset
      </Button>
    </Box>
  );
}
