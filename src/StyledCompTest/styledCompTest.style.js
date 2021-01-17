import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem;

  .nav {
    background-color: goldenrod;

    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  ul {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    list-style: none;

    li {
      color: crimson;
      cursor: pointer;
      padding: 1rem;

      &:hover {
        background-color: palevioletred;
      }
    }
  }

  figure {
    padding-right: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: palevioletred;
  margin-bottom: 1rem;
`;

export const SomeText = styled.p`
  font-size: 1rem;
  color: hotpink;
  margin-bottom: 2rem;
`;

export default Wrapper;