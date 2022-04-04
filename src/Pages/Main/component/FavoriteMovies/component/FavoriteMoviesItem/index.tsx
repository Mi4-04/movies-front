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
import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_WATCHED } from "@app/gql/mutation";
import { idText } from "typescript";

interface IFavoriteMoviesProps {
  film: IMovies;
  deleteFilm: (id: number) => void;
}

export const FavoriteMoviesItem = ({
  film,
  deleteFilm,
}: IFavoriteMoviesProps) => {
  const { t } = useTranslation();

  const { id, posterPath, title, popularity, voteAverage, releaseDate } = film;
  const [updateWatched] = useMutation(UPDATE_WATCHED);

  const isWatched = localStorage.getItem(String(id));

  const [watched, setWatched] = React.useState<boolean>(
    JSON.parse(String(isWatched))
  );

  const handleWatched = (id: number) => {
    updateWatched({
      variables: {
        updateWatchedId: id,
      },
      onCompleted: (data) => {
        setWatched(data.updateWatched.watched);
      },
    });

    localStorage.setItem(JSON.stringify(id), JSON.stringify(!watched));
  };

  return (
    <MovieLayout watched={watched}>
      <Card sx={{ mt: 4, maxWidth: 250 }}>
        <CardMedia
          component="img"
          image={`${URL_POST}${posterPath}`}
          alt={`${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1">
            {t(`film.popularity`)} {popularity}
          </Typography>
          <Typography variant="body1">
            {t(`film.voteAverage`)}
            {voteAverage}
          </Typography>
          <Typography variant="body1">
            {t(`film.releaseDate`)} {releaseDate}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => handleWatched(id)}
            color="success"
            size="large"
          >
            <CheckBoxIcon />
          </IconButton>
          <IconButton onClick={() => deleteFilm(id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </MovieLayout>
  );
};
