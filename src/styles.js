import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

// Background and Theme Styles
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.mainColor};
    background-color: ${({ theme }) => theme.backgroundColor}
  }
`;
export const theme = {
  mainColor: "red", // main font color
  backgroundColor: "white", // main background color
};

//Buttons Styles
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

//NavBar Styles
export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const NavStyled = styled.nav`
  background-color: ___CSS_0___;
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${({ theme }) => theme.mainColor};

  &.active {
    background-color: pink;
  }
`;

//Note Styles
const NoteItemStyled = styled.div`
  p {
    text-align: center;
  }
`;

//Notebook Styles
export const NotebookItemStyled = styled.div`
  p {
    text-align: center;
  }
`;

//NotebookList && NoteList Styles
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  p {
    vertical-align: middle;
  }
`;

//Home Component Styles
export const Title = styled.h1`
  text-align: center;
  background-color: #f2e596;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Description = styled.h4`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
`;

export const HomeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  /* padding-bottom: 10px; */
  border: thick solid;
  border-color: ${(props) => props.theme.mainColor};
`;

export default NoteItemStyled;
