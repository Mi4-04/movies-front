import styled from "styled-components";
import tw from "twin.macro";

export const HeaderGenres = styled.h2`
  ${tw`block text-center items-center`}
`;

export const HeaderMovies = styled.h1`
  ${tw` block   items-start ml-10`}
`;

export const LinkLayout = styled.button`
  ${tw`ml-2`}
`;

export const LogOutWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const LogOutButton = styled.button`
  margin-left: 10px;
  text-decoration: underline;
`;
