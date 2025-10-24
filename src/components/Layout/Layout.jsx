import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 100px 0 60px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.$alternate ? props.theme.colors.background : props.theme.colors.white};
`;

const Container = styled.div`
  width: 100%; /* Ocupa 100% do espaço do Section */
  max-width: 1200px; /* Limita a largura máxima */
  margin: 0 auto; /* <<< ISSO CENTRALIZA O CONTAINER NA PÁGINA */
  padding: 0 40px; /* Cria o espaçamento de 80px (40px de cada lado) */
  box-sizing: border-box; /* Garante que o padding não aumente a largura total */
`;

const Layout = ({ children, alternate, id }) => {
  return (
    <Section $alternate={alternate} id={id}>
      <Container>
        {children}
      </Container>
    </Section>
  );
};

export default Layout;