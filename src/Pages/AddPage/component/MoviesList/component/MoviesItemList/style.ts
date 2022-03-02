import styled from 'styled-components'
import tw from 'twin.macro'

export const MovieLayout = styled.div`
   ${tw`flex flex-col items-start p-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm min-w-min `}
`;

export const MovieImg = styled.img`
  ${tw`w-44 rounded-md border-2 border-gray-300`}
`;

export const DescriptionLayout = styled.div`
  ${tw`w-full flex flex-col ml-2 p-2 `}
`;

export const TitleLayout = styled.div`
  ${tw`flex flex-row items-center`}
`;

export const MovieTitle = styled.h2`
  ${tw`flex flex-col ml-2`}
`;

export const MoviePopularity = styled.p`
  ${tw`text-gray-800 mt-2 ml-2 overflow-clip `}
`;

export const ReleaseDate = styled.p`
  ${tw`text-gray-800 mt-2 ml-2`}
`;

export const ButtonPadLayout = styled.div`
  ${tw` flex flex-row items-center justify-between`}
`;
