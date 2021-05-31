import styled from 'styled-components'

import { AiOutlineGlobal, BiUserX, RiFocus2Line, IoShieldCheckmarkOutline } from 'react-icons/all'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;

  > .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100px;
    width: 49%;
    height: 100%;
    background: #FFF;
    border-radius: 30px;
    margin: 0 0 10px 0;
    padding: 0 20px;

    span {
      font-size: 12px;
      line-height: 1;
      margin: 10px 0 0 0;
      color: #cfcfd2;
    }

    p {
      font-size: 18px;
      line-height: 1;
      color: #1E1B57;
      font-weight: bold;
    }

    &:first-child {
      background: #534cce;
      color: #FFF;

      p {
        color: #FFF;
      }
    }
    &:nth-child(2) {
      background: #f14d9c;
      color: #FFF;

      p {
        color: #FFF;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 100px;
    max-width: 400px;

    > .card {
      height: 49%;
      width: 49%;
    }
  }
`

export const IconGlobal = styled(AiOutlineGlobal)`
  font-size: 25px;
`

export const IconUser = styled(BiUserX)`
  font-size: 25px;
`

export const IconFocus = styled(RiFocus2Line)`
  font-size: 25px;
`

export const IconEscudo = styled(IoShieldCheckmarkOutline)`
  font-size: 25px;
`
