import React from "react";
import { Text, Avatar, Container, Progress, Grid } from "@mantine/core";
import LoadComponent from "./LoadingComponent";
import { toCapitalize } from "@/helpers/utils";

export default function HorizontalBarChart({
  data = [],
  isLoading = false,
  FooterComponent,
  isError = false
}) {
  return (
    <LoadComponent isLoading={isLoading} isError={isError} isEmpty={!data}>
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
            <Avatar size={50} radius="xl" />
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
              <Text size="md" fw="bold" component="h3" mb="0.5rem">
                {toCapitalize(item.keyword_group.replace(/_/g, " - "))}
              </Text>
              <Text size="sm" color="grey" ta="right" component="p" mb="0.5rem">
                {item.total} posts
              </Text>
              </div>
              <div className="row">
                <Progress.Root size="sm" className="column">
                  <Progress.Section
                    color="blue"
                    value={item.positive_percentage}
                  ></Progress.Section>
                </Progress.Root>
                <div
                  style={{
                    maxWidth: "80px",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  <Text component="p" size="sm">
                    {`${item.positive_percentage}%`}
                  </Text>
                </div>
              </div>
              <div className="row">
                <Progress.Root size="sm" className="column">
                  <Progress.Section
                    color="red"
                    value={item.negative_percentage}
                  ></Progress.Section>
                </Progress.Root>
                <div
                  style={{
                    maxWidth: "80px",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  <Text component="p" size="sm">
                    {`${item.negative_percentage}%`}
                  </Text>
                </div>
              </div>
              <div className="row">
                <Progress.Root size="sm" className="column" color="blue">
                  <Progress.Section
                    color="green"
                    value={item.neutral_percentage}
                  ></Progress.Section>
                </Progress.Root>
                <div
                  style={{
                    maxWidth: "80px",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  <Text component="p" size="sm">
                    {`${item.neutral_percentage}%`}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
      <Container
        style={{
          padding: "0 25px 25px",
        }}
      >
        {FooterComponent}
      </Container>
    </LoadComponent>
  );
}
