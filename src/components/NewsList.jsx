import { Grid, Typography } from "@mui/material";
import { useNews } from "../hooks/useNews";
import { News } from "./News";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const NewsList = () => {
  const { news, totalNews, handleChangePage,page } = useNews();

  const totalPages = Math.ceil(totalNews / 20);

  return (
    <>
      <Typography
        align="center"
        marginY="2rem"
        variant="h4"
        component="h2"
      >
        Últimas Noticias  
      </Typography>
      <Grid
        container
        spacing={2}
      >
        {
          news.map(noticia => (
            <News 
              key={noticia.url}
              noticia={noticia}
            />
          ))
        }
      </Grid>
      <Stack 
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          sx={{marginY: "1rem"}}
          count={totalPages} 
          color="primary"
          onChange={handleChangePage}
          page={page} 
      />
      </Stack>
    </>
  );
};
