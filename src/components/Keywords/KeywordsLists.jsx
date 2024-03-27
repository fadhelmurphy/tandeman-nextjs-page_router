import React from "react";
import { Avatar, Button, Text } from "@mantine/core";
import LoadComponent from "../LoadingComponent";
export default function KeywordsLists({ 
  data = [],
  isLoading = false,
  fetchNextPage,
  hasNextPage = false,
  isFetchingNextPage = false,
  isFetching = false,
  isError = false
 }) {
  return (
    <LoadComponent isLoading={isLoading} isError={isError} isEmpty={!data.length}>

    <div
      style={{
        display: "flex",
        overflow: "auto",
        alignItems: "center"
      }}
    >
      {data?.map((page) =>
          page?.map((item, idx) => (
        <div className="avatar-card" key={idx}>
          <Avatar size={70} radius={70} key={idx}
        mx="auto" />
          <Text ta="center" fz="sm" fw={600} mt="md">{item.keyword}</Text>
        </div>
      )))}

{(isFetchingNextPage || hasNextPage) && (
          <div
          className="avatar-card" style={{
            alignItems: "center",
            padding: 0
          }}>
          <Button
            variant="light"
            size="md"
            radius="xl"
            mb="lg"
            loading={
              isLoading ||
              isFetchingNextPage ||
              isFetching ||
              isFetchingNextPage
            }
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "No more data"}
          </Button></div>
        )}
      <style jsx>
        {`
        .avatar-card {
            padding: 1rem;
            flex: 0 0 225px;
            align-items: center;
    display: flex;
    flex-direction: column;
        }
        `}
      </style>
    </div>
    </LoadComponent>
  );
}
