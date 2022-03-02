import styled from 'styled-components'
import tw from 'twin.macro'

interface IMoviesList {
    blockAndListview : boolean;
  }

export const MoviesLayout = styled.div<IMoviesList>((props) => [
    tw`mt-4 grid gap-4 grid-cols-2`,
    !props.blockAndListview && tw`grid-cols-1`,
    props.blockAndListview && tw`xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3`,
  ]);
