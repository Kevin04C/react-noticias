import { Container, Grid, Typography } from '@mui/material'
import { Form } from './components/Form'
import { NewsList } from './components/NewsList'
import { NewsProvider } from './context/NewsContext'

const App = () => {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography 
            align='center'
            component='h1'
            variant='h3'
            marginY="2rem"
          >
              Buscador de Noticias
            </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={12} md={6}>
            <Form/>
          </Grid>
        </Grid>
        <NewsList />
      </Container>
    </NewsProvider>
  )
}

export default App