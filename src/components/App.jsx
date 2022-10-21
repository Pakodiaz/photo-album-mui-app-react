import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const cards = [1,2,3,4,5,6,7,8,9];

const App =  () => {

  return (
    <>
    <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={{ marginRight: '20px' }}/>
            <Typography variant="h6">
              Photo Album
            </Typography>         
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" sx={{ marginTop: '100px' }}>
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>                     
                Araujo's  Photo Album
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hola a todos, este es mi álbum de fotos. Recuerda suscribirte y seguirme.
              </Typography>
            <div>
                <Grid container spacing={2} justifyContent="center"   alignItems="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                        Ver mis fotos
                    </Button>                  
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                       Otro Album
                    </Button>
                  </Grid>
                </Grid>
            </div>
          </Container>
        </div>

        <Container maxWidth="md" sx={{ padding: '80px 0'  }}>
          <Grid container spacing={4}>

          { cards.map( (card) => (

            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card  sx={{ height:'100%', display: 'flex', flexDirection: 'column'  }}>
                <CardMedia 
                  sx={{ paddingTop: '56.25%'  }}
                  image='https://source.unsplash.com/random'
                  title="Image Title"
                />
                <CardContent sx={{  flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>
                  <Typography gutterBottom variant='h5'>
                    This is a media card. Describe the content.
                  </Typography>
                </CardContent>   
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>       
              </Card>
            </Grid>
          ))}
                  
          </Grid>
        </Container>
      </main>  

      <footer sx={{  backgroundColor: 'green', padding: '50px 0' }}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Something here to give footer a purpose!!!.
          </Typography>
      </footer>


    </>
  );
}

export default App;
