import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 30px 0 0 30px;
  padding: 2% 3%;
  max-height: 300px;
  overflow: auto;
  margin: 0 0 40px 0;

  > h4 {
    font-size: 18px;
  }

  > .item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: solid 1px #eee;

    &:first-child {
      display: none;
    }

    > img {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      margin-right: 10px;
    }

    > p {
      display: flex;
      justify-content: space-between;
      width: 100%;

      span {
        &:first-child {
          color:  #666;
          font-size: 15px;
        }
        &:last-child {
          font-size: 18px;
          font-weight: bold;
          color: #1E1B57;
        }
      }
    }
  }

  .item0 {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    max-height: 400px;
  }
`
