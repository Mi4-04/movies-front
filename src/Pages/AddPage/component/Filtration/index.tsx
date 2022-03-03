import { IGenre } from "@app/utils/movies";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Popularity } from "@app/Pages/AddPage/component/Filtration/component/Popularity";
import { YearSelect } from "@app/Pages/AddPage/component/Filtration/component/YearSelect";
import { GenreList } from "@app/components/GenreList";

interface IFriltrationProps {
  genres: IGenre[];
  year: string;
  setYear: (value: string) => void;
  voteAverage: number;
  setVoteAverage: (value: number) => void;
  setGenres: (value: IGenre[]) => void;
}

export const Filtration = ({
  genres,
  year,
  setYear,
  voteAverage,
  setVoteAverage,
  setGenres,
}: IFriltrationProps) => {
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
            <GenreList genres={genres} setGenres={setGenres} />
          </Grid>
          <Grid item>
            <YearSelect year={year} setYear={setYear} />
          </Grid>
          <Grid item>
            <Popularity
              voteAverage={voteAverage}
              setVoteAverage={setVoteAverage}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
