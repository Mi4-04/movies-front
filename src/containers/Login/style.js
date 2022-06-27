import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`bg-gray-200  h-screen w-screen flex flex-col items-center justify-center`}
`;

export const ButtonCome = styled.div`
  padding-left: 60px;
  padding-top: 20px;
`;

export const Password = styled.div`
  padding-top: 20px;
`;

export const AuthBlock = styled.div`
  ${tw`bg-gray-100 rounded py-8 px-5 shadow w-80 max-w-sm `}
`;
