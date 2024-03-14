import React from "react";
import { Text, Avatar, Container, Progress, Grid } from "@mantine/core";
import LoadComponent from "./LoadingComponent";

export default function ProcessingTask({
  data = [],
  isLoading = false,
  FooterComponent,
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
                {item.keyword_group.replace(/_/g, " - ")}
              </Text>
              <Text size="xs" color="grey" ta="right" component="p" mb="0.5rem">
                {item.total}
              </Text>
              </div>
                <Progress.Root size="sm" className="column">
                  <Progress.Section
                    color="blue"
                    value={item.positive_percentage}
                  ></Progress.Section>
                </Progress.Root>
            </div>
          </div>
        ))}
      </Container>
    </LoadComponent>
  );
}
