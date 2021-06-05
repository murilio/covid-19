import styled from 'styled-components'

export default function UpdateNotice () {
  return (
    <Container>
      <a href="/noticies">
        <div className="title">
          <img src="/onu.png" alt="" />
          <span>Live</span>
          <h4>Update</h4>
        </div>
        <div className="contentUpdateNotice">
          <img src="/covid.jpg" alt="" />
          <div>
            <h3>Brasil soma 2.500 mortes pela covid-19 e 3 capitais atingem 100% de leitos ocupados</h3>
            <p>Nas últimas 24 horas o Brasil somou mais de 2. 500 mortes pela covid-19,
              se aproximando das 468 mil vítimas da doença.</p>
          </div>
        </div>
      </a>
    </Container>
  )
}

export const Container = styled.div`
  background-color: var(--color-white);
  border-radius: 20px;

  a {
    display: flex;
    flex-direction: column;
    gap: 30px;

    color: var(--color-dark-blue);
    padding: 20px 20px 40px;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      span {
        background-color: var(--color-red);
        color: var(--color-white);
        border-radius: 20px;
        padding: 0 5px;
      }

      h4 {
        font-size: 18px;
      }

      img {
        width: 40px;
        height: 32px;
        object-fit: cover;
      }
    }

    .contentUpdateNotice {
      display: grid;
      grid-template-columns: 30% 70%;
      gap: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        h3 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;

          font-size: 15px;
        }

        p {
          font-size: 12px;
          color: var(--color-gray-dark);

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
`
