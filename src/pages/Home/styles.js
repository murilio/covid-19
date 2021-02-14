import styled from 'styled-components'

export const Container = styled.section`
  background-color: #f5f6fa;
  min-height: 100vh;
  padding: 2% 5%;

  > h1 {
    margin: 0 0 20px 0;
    line-height: 1;
  }

  > section {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;

      > div {
        width: 32%;
      }
    }
  }

`
