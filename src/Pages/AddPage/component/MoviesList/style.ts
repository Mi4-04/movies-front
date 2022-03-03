import styled from 'styled-components'
import tw from 'twin.macro'

interface IMoviesList {
    blockView : boolean;
  }

export const MoviesLayout = styled.div<IMoviesList>((props) => [
    tw`mt-4 grid gap-4 grid-cols-2`,
    !props.blockView && tw`grid-cols-1`,
    props.blockView && tw`xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3`,
  ]);
