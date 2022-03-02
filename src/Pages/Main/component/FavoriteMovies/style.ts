import styled from 'styled-components'
import tw from 'twin.macro'

interface IMoviesList {
    view : boolean;
  }


export const MoviesLayout = styled.div<IMoviesList>((props) => [
    tw`mt-4 grid gap-4 grid-cols-2`,
    !props.view && tw`grid-cols-1`,
    props.view && tw`xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3`,
  ]);
