import React from "react";
import { Filtration } from "@app/Pages/AddPage/component/Filtration";
import { FilterLayout } from "./style";
import { IGenre } from "@app/utils/movies";
import { DEFAULT_VOTE_AVARAGE, DEFAULT_YEAR } from "@app/constant";
import { MoviesList } from "./component/MoviesList";
import { useTranslation } from "react-i18next";
import { ButtonPad } from "@app/components/ButtonPad";

interface IAddPageProps {
  genres: IGenre[];
  setGenres: (value: IGenre[]) => void;
  blockView: boolean;
  setBlockView: (value: boolean) => void;
  genresId: number[];
}

export const AddPage = ({
  genres,
  setGenres,
  blockView,
  setBlockView,
  genresId,
}: IAddPageProps) => {
  const { t } = useTranslation();
  const [year, setYear] = React.useState<string>(DEFAULT_YEAR);
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
