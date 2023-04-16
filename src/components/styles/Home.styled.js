import styled from "styled-components";
import imagen1 from "../../assets/sibelly1.jpg"
export const StyledHome = styled.section`
  background-image: url(${imagen1});
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  height: 100vh;
  background-size: cover; /* ajusta la imagen al tamaño del contenedor */
  background-position: center; /* centra la imagen vertical y horizontalmente */

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: 0;
  }
`;





export const Name = styled.h2`
  font-size: 3rem;
  font-family: Taniya Script;
  position: relative;
  color: #fff9f9;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.1875rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.875rem;
  }
  @font-face {
    font-family: 'glitterine';
    src: url('glitterine-webfont.eot');
    src: url('glitterine-webfont.eot?#iefix') format('embedded-opentype'),
         url('glitterine-webfont.woff2') format('woff2'),
         url('glitterine-webfont.woff') format('woff'),
         url('glitterine-webfont.ttf') format('truetype'),
         url('glitterine-webfont.svg#my_fontregular') format('svg');
   

}
font-family: glitterine;
  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 8.375rem;
  font-weight: 300;
  
  margin: 0.5rem 0 1rem 0;
  color: #fff;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    font-size: 4.25rem;
   
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 4.6875rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 4.1875rem;
  }
  @font-face {
    font-family: 'aliqaregular';
    src: url('aliqa-webfont.eot');
    src: url('aliqa-webfont.eot?#iefix') format('embedded-opentype'),
         url('aliqa-webfont.woff2') format('woff2'),
         url('aliqa-webfont.woff') format('woff'),
         url('aliqa-webfont.ttf') format('truetype'),
         url('aliqa-webfont.svg#aliqaregular') format('svg');
    font-weight: normal;
    font-style: normal;

}
  font-family: aliqaregular;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;

export const Line = styled.hr`
  width: 5rem;
  position: absolute;
  bottom: 6rem;
  background: ${({ theme }) => theme.backgroundColor.orange};
  border: none;
  height: 0.125rem;
  border-radius: 2.8125rem;
`;

export const Greeting = styled.p`
  position: absolute;
  bottom: 3rem;
  color: ${({ theme }) => theme.color.white};
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  position: absolute;
  right: 5rem;
  bottom: 3rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Social = styled.a`
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  color: ${({ theme }) => theme.color.light};

  &:hover {
    transform: translateY(-0.3125rem);
    color: ${({ theme }) => theme.backgroundColor.orange};
  }

  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: -1rem;
    top: 50%;
    height: 0.5rem;
    width: 0.5rem;
    background: ${({ theme }) => theme.backgroundColor.orange};
    border-radius: 2.8125rem;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const Quote = styled.span`
  position: absolute;
  right: 25%;
  bottom: 30%;
  color: #94929d;
  font-size: 0.625rem;
  letter-spacing: 0.125rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
