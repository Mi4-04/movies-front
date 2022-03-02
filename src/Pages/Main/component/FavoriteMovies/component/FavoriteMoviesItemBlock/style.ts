import styled from 'styled-components'
import tw from 'twin.macro'

interface IMovie {
  watched: boolean
}

export const MovieLayout = styled.div<IMovie>((props) => [
   tw`flex flex-col items-start p-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm min-w-min`,
   props.watched && tw`bg-gray-400`
]);
