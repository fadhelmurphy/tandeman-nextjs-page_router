import React from "react";
import { Container, Grid, Text } from "@mantine/core";
import WaveChart from "./WaveChart";
import LoadComponent from "./LoadingComponent";

export default function StatisticsArticle({
  acquireData = [],
  waveChartData = [],
  isAcquireLoading = false,
  isWaveChartLoading = false,
}) {
  return (
    <>
      <LoadComponent isLoading={isWaveChartLoading}>
        <Container p="xl">
          <WaveChart data={waveChartData} />
        </Container>
      </LoadComponent>
      <LoadComponent isLoading={isAcquireLoading}>
        <Grid columns={12} pb="xl">
          {acquireData?.map((item, idx) => (
            <Grid.Col span={4} key={idx}>
              <Text size="xl" color="grey" fw="bold" ta="center">
                {item.value}
              </Text>
              <Text size="xs" color="grey" ta="center">
                {item.title}
              </Text>
            </Grid.Col>
          ))}
        </Grid>
      </LoadComponent>
    </>
  );
}
