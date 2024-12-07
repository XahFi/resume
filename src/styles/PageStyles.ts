import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  /* background-color: ${({ theme }) => theme.body}; */
  backdrop-filter: blur(40px);
  border-radius: 8px;

  @media (width <= 1000px) and (width > 500px) {
    width: 700px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const Section = styled.section`
  margin: 20px 0;

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    margin-bottom: 10px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
`;