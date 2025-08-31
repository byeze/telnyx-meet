import { Fragment } from 'react';
import Head from 'next/head';
import { Box, Button, Main, Text, Heading } from 'grommet';
import { Video } from 'grommet-icons';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Videollamada Fácil</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main background='light-2' align='center' justify='center' pad='large'>
        <Box align='center' gap='large' pad='large'>
          <Box align='center' gap='medium'>
            <Video size='xlarge' color='brand' />
            <Heading level='1' textAlign='center' margin='none'>
              Videollamada Fácil
            </Heading>
            <Text textAlign='center' size='large' color='dark-3'>
              Únete a una videollamada en segundos
            </Text>
          </Box>

          <Button
            data-testid='btn-select-room'
            href='/rooms'
            label='Comenzar Videollamada'
            primary
            size='large'
            pad={{ horizontal: 'large', vertical: 'medium' }}
          />
        </Box>
      </Main>
    </Fragment>
  );
}
