import React from "react";
import { Filtration } from "@app/containers/AddPage/component/Filtration";
import { FilterLayout } from "./style";
import { IGenre } from "@app/utils/movies";
import { DEFAULT_VOTE_AVARAGE, DEFAULT_YEAR } from "@app/constant";
import { MoviesList } from "./component/MoviesList";
import { useTranslation } from "react-i18next";
import { ButtonPad } from "@app/components/ButtonPad";
import { MoviesContext } from "@app/utils/movies-context";

const AddPage = () => {
  const { genres, setGenres, blockView, setBlockView, genresId } =
    React.useContext(MoviesContext);
  const { t } = useTranslation();
  const [year, setYear] = React.useState<number>(DEFAULT_YEAR);
  const [voteAverage, setVoteAverage] =
    React.useState<number>(DEFAULT_VOTE_AVARAGE);

  return (
    <div>
      <FilterLayout>
        <h1> {t(`filter_header`)}</h1>
        <Filtration
          genres={genres}
          year={year}
          setYear={setYear}
          voteAverage={voteAverage}
          setVoteAverage={setVoteAverage}
          setGenres={setGenres}
        />
        <ButtonPad setBlockView={setBlockView} />
      </FilterLayout>

      <MoviesList
        year={year}
        voteAverage={voteAverage}
        blockView={blockView}
        genresId={genresId}
      />
    </div>
  );
};

export default AddPage;
