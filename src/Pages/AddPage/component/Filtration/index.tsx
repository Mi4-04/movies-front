import { IGenre } from "@app/utils/movies";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Popularity } from "@app/Pages/AddPage/component/Filtration/component/Popularity";
import { YearSelect } from "@app/Pages/AddPage/component/Filtration/component/YearSelect";
import { GenreList } from "@app/components/GenreList";

export const Filtration = (props: {
  genres: IGenre[];
  year: string;
  setYear: (value: string) => void;
  voteAverage: number;
  setVoteAverage: (value: number) => void;
  setGenres: (value: IGenre[]) => void;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1060,
        height: "100%",
        maxHeight: 400,
        border: "1px solid black",
        borderRadius: "10% / 50%",
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ my: 3, mx: 6 }}>
        <Grid container alignItems="center">
          <Grid item>
            <GenreList genres={props.genres} setGenres={props.setGenres} />
          </Grid>
          <Grid item>
            <YearSelect year={props.year} setYear={props.setYear} />
          </Grid>
          <Grid item>
            <Popularity
              voteAverage={props.voteAverage}
              setVoteAverage={props.setVoteAverage}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
