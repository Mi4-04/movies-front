import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { URL_POST } from "@app/constant";
import IconButton from "@mui/material/IconButton";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import { MovieLayout } from "./style";
import { IMovies } from "@app/utils/movies";

export const FavoriteMoviesItemBlock = (props: {
  film: IMovies;
  handleWatched: (index: number) => void;
  deleteFilm: (id: number) => void;
  index: number;
}) => {
  const { t } = useTranslation();

  return (
    <MovieLayout watched={props.film.watched}>
      <Card sx={{ mt: 4, maxWidth: 250 }}>
        <CardMedia
          component="img"
          image={`${URL_POST}${props.film.posterPath}`}
          alt={`${props.film.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.film.title}
          </Typography>
          <Typography variant="body1">
            {t(`film.popularity`)} {props.film.popularity}
          </Typography>
          <Typography variant="body1">
            {t(`film.voteAverage`)}
            {props.film.voteAverage}
          </Typography>
          <Typography variant="body1">
            {t(`film.releaseDate`)} {props.film.releaseDate}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => props.handleWatched(props.index)}
            color="success"
            size="large"
          >
            <CheckBoxIcon />
          </IconButton>
          <IconButton onClick={() => props.deleteFilm(props.film.id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </MovieLayout>
  );
};
