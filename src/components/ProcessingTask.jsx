import React from "react";
import { Text, Avatar, Container, Progress, Grid } from "@mantine/core";
import LoadComponent from "./LoadingComponent";

const data = [
  {
    task: "Articles text cleaning process",
    percentage: 80,
    total: "2,100"
  },

  {
    task: "Counting important phrases",
    percentage: 70,
    total: "1,880"
  },

  {
    task: "Deciding opinions tone",
    percentage: 60,
    total: "1,521"
  },

  {
    task: "Finding opinions' emotional pattern",
    percentage: 50,
    total: "884"
  },

  {
    task: "Finding useful entities",
    percentage: 40,
    total: "473"
  },

  {
    task: "Squeezing data and get the summary",
    percentage: 30,
    total: "418"
  }
]

export default function ProcessingTask({
  // data = [],
  isLoading = false,
}) {
  return (
    <LoadComponent isLoading={isLoading}>
      <Container
        style={{
          padding: "25px 25px",
        }}
      >
        {data?.length > 0 && data.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "2rem",
              width: "100%",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "100%",
                justifyContent: "space-between"
              }}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)"
              }}>
              <Text size="xs" fw="bold" component="h3" mb="0.5rem">
                {item.task}
              </Text>
              <Text size="xs" color="grey" ta="right" component="p" mb="0.5rem">
                {item.total}
              </Text>
              </div>
                <Progress.Root size="sm" className="column">
                  <Progress.Section
                    color="blue"
                    value={item.percentage}
                  ></Progress.Section>
                </Progress.Root>
            </div>
          </div>
        ))}
      </Container>
    </LoadComponent>
  );
}
