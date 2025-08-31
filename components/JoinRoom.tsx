import React from 'react';
import { Box, Button, TextInput, Text, Heading } from 'grommet';
import { User } from 'grommet-icons';

interface Props {
  username: string;
  updateUsername: React.Dispatch<React.SetStateAction<string>>;
  onClickJoin: () => void;
}

const JoinRoom = ({
  username,
  updateUsername,
  onClickJoin,
}: Props) => {
  return (
    <Box
      pad='large'
      gap='large'
      background='white'
      round='medium'
      elevation='medium'
      width='medium'
      style={{
        justifySelf: 'center',
      }}
    >
      <Box align='center' gap='medium'>
        <User size='large' color='brand' />
        <Heading level='3' margin='none' textAlign='center'>
          ¿Cómo te llamas?
        </Heading>
        <Text textAlign='center' color='dark-3'>
          Escribe tu nombre para comenzar
        </Text>
      </Box>

      <TextInput
        data-testid='input-username'
        value={username}
        onChange={(e) => {
          updateUsername(e.target.value);
        }}
        placeholder='Tu nombre'
        size='large'
      />

      <Button
        data-testid='btn-join-room'
        primary
        disabled={!username.trim()}
        label='Unirse a la Videollamada'
        onClick={onClickJoin}
        size='large'
      />
    </Box>
  );
};

export default JoinRoom;
