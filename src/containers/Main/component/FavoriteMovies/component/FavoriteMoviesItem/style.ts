import styled from "styled-components";
import tw from "twin.macro";
import { IMovieProps } from "@app/types";

export const MovieLayout = styled.div<IMovieProps>((props) => [
  tw`flex flex-col items-start p-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm min-w-min`,
  props.watched && tw`bg-gray-400`,
]);
