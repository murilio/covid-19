import React from 'react'

// components
import AllCases from '../../components/All'
import Countries from '../../components/Countries'
import Brazil from '../../components/Brazil'
import BarChart from '../../components/BarChart'

// styles
import { Container } from './styles'

export default function Home () {
  return (
    <Container>
      <h1>Covid19 in real time</h1>
      <section className="content">
        <AllCases />
        <Countries />
        <Brazil />
      </section>
      <BarChart />
    </Container>
  )
}
