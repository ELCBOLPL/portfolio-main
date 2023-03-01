import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  font-family: Winterland Slant;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.mb || "3rem"};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  position: relative;
  font-size: 3rem;
  font-weight: 800;
  text-transform: capitalize;
  z-index: 1;
  color: ${(props) => (props.dark ? "#262637" : "#262637")};
  display: inline-block;
  border: 1px solid transparent;
  font-family: Winterland Slant;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.5rem;
  }
`;

export const SectionTitleNosotros = styled.h2`
  margin-bottom: 0.5rem;
  position: relative;
  font-size: 3rem;
  font-weight: 800;
  text-transform: capitalize;
  z-index: 1;
  color: ${(props) => (props.dark ? "#fff" : "#fff")};
  display: inline-block;
  border: 1px solid transparent;
  font-family: Winterland Slant;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.5rem;
  }
`;
