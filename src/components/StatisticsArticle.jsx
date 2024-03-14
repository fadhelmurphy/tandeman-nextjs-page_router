import React from 'react'
import {Container, Grid, Text} from '@mantine/core'
import WaveChart from './WaveChart'
export default function StatisticsArticle() {
  return (
    <>
    <Container p="xl">
    <WaveChart />
    </Container>
    <Grid columns={12} pb="xl">
      <Grid.Col span={4}>
        <Text size="xl" color="grey" fw="bold" ta="center">1K</Text>
        <Text size="xs" color="grey" ta="center">Today&apos;s Articles</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text size="xl" color="grey" fw="bold" ta="center">5.2K</Text>
        <Text size="xs" color="grey" ta="center">This Month&apos;s Articles</Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Text size="xl" color="grey" fw="bold" ta="center">10K</Text>
        <Text size="xs" color="grey" ta="center">This Whole Time&apos;s Articles</Text>
      </Grid.Col>
      </Grid>
    </>
  )
}
