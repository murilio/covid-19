import styled from 'styled-components'

import { AiOutlineBarChart } from 'react-icons/ai'

export const Container = styled.div`
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 30px 0 0 30px;
  padding: 2% 3%;
  max-height: 400px;
  overflow: auto;
  margin: 0 0 40px 0;
  width: 100%;

  > h4 {
    font-size: 18px;
  }

  img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 10px;
  }

  table {
    width: 100%;

    th, td {
      padding: 10px 15px;
      border-bottom: 1px solid #eee;

      > a {
        display: block;
        width: 100%;
        height: 100%;
      }

      &:nth-child(4) {
        display: none;

        @media (min-width: 1024px) {
          display: table-cell;
        }
      }

      > a {
        color: #222;
      }
    }

    th {
      text-align: left;
    }
  }

  .item0 {
    display: none;
  }
`

export const ViewButton = styled(AiOutlineBarChart)`
  font-size: 25px;
`
