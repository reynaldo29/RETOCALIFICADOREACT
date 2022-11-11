import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const CardMovies = ({ movies }) => {
  return (
    <Box>
      <Grid container spacing={3} mt={3}>
        {movies.length > 0 &&
          movies.map(({ title, description, images }) => (
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  width={200}
                  height={300}
                  image={images.posterArt.url}
                />
                <CardContent>
                  <Typography variant="body1">{title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CardMovies;
