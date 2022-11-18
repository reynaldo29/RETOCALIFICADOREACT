import {
	Card,
	CardContent,
	CardMedia,
	Box,
	Typography,
	Grid,
} from "@mui/material";

import "./card.css";

const CardMovies = ({ movies, initialPage, offsetPage }) => {
	return (
		<Box>
			<Grid container spacing={3} mt={3}>
				{movies.length > 0 &&
					movies
						.slice(initialPage, offsetPage)
						.map(({ title, description, images }) => (
							<Grid item xs={12} sm={4}>
								<Card className={"cardImagen"}>
									<CardMedia
										component='img'
										width={200}
										height={400}
										image={images.posterArt.url}
									/>

									<CardContent className='cardInfo'>
										<Typography
											variant='body1'
											className='title'
										>
											{title}
										</Typography>
										<Typography
											variant='body2'
											className='desc'
										>
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
