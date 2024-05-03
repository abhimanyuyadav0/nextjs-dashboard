import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Menu, MenuItem, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function PokemonList(props: any) {
  const { pokemons, setSort, setOrder } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (id: number) => {
    // router.push(`/pokemons/${id}/edit`);
    handleClose();
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons?.map((pokemon:any) => (
            <TableRow key={pokemon.id}>
              <TableCell>{pokemon.id}</TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell align="right">{pokemon.email}</TableCell>
              <TableCell>
                <IconButton onClick={handleClick}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem>Info</MenuItem>
                  <MenuItem onClick={() => handleEdit(pokemon.id)}>Edit</MenuItem>
                  <MenuItem className="text-danger">Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
