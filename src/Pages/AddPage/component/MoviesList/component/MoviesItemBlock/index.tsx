import React from "react";
import { URL_POST } from "@app/constant";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { MovieLayout } from "./style";
import { IMovies } from "@app/utils/movies";

interface IMoviesItemBlock {
  film: IMovies;
}

export const MoviesItemBlock = ({ film }: IMoviesItemBlock) => {
  const { t } = useTranslation();

  const [filmsIds, setFilmsIds] = React.useState<number[]>(
    JSON.parse(localStorage["filmsIds"])
  );

  const saveFilm = (id: number): void => {
    let newfilmsIds = [...filmsIds, id];
    setFilmsIds(newfilmsIds);
    localStorage.setItem("filmsIds", JSON.stringify(newfilmsIds));
  };

  return (
    <MovieLayout>
      <Card sx={{ mt: 4, maxWidth: 250 }}>
        <CardMedia
          component="img"
          image={`${URL_POST}${film.poster_path}`}
          alt={`${film.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {film.title}
          </Typography>
          <Typography variant="body1">
            {t(`film.popularity`)} {film.popularity}
          </Typography>
          <Typography variant="body1">
            {t(`film.vote_average`)}
            {film.vote_average}
          </Typography>
          <Typography variant="body1">
            {t(`film.release_date`)} {film.release_date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color={filmsIds.includes(film.id) ? "success" : "primary"}
            onClick={() => saveFilm(film.id)}
            size="small"
          >
            {t(`film.save`)}
          </Button>
        </CardActions>
      </Card>
    </MovieLayout>
  );
};
