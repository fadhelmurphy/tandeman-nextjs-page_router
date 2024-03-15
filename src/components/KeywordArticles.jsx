import React from "react";
import { Container, Grid, Text } from "@mantine/core";
import WaveChart from "./WaveChart";
import LoadComponent from "./LoadingComponent";

export default function KeywordArticles({
  waveChartData = [],
  isWaveChartLoading = false,
}) {
  return (
    <>
      <LoadComponent isLoading={isWaveChartLoading}>
        <Container p="xl">
          <WaveChart data={waveChartData} />
        </Container>
      </LoadComponent>
    </>
  );
}
