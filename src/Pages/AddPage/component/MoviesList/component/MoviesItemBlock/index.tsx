import { URL_POST } from "@app/constant";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { MovieLayout } from "./style";

export const MoviesItemBlock = (props: {
  film: any;
  filmsIds: number[];
  saveFilm: (id: number) => void;
}) => {
  const { t } = useTranslation();

  return (
    <MovieLayout>
      <Card sx={{ mt: 4, maxWidth: 250 }}>
        <CardMedia
          component="img"
          image={`${URL_POST}${props.film.poster_path}`}
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
            {t(`film.vote_average`)}
            {props.film.vote_average}
          </Typography>
          <Typography variant="body1">
            {t(`film.release_date`)} {props.film.release_date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color={
              props.filmsIds.includes(props.film.id) ? "success" : "primary"
            }
            onClick={() => props.saveFilm(props.film.id)}
            size="small"
          >
            {t(`film.save`)}
          </Button>
        </CardActions>
      </Card>
    </MovieLayout>
  );
};
