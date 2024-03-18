import { Avatar, Button, Container, Tooltip } from "@mantine/core";
import LoadComponent from "./LoadingComponent";
export default function NewsAuthors({
  data = [],
  isLoading = false,
  fetchNextPage,
  hasNextPage = false,
  isFetchingNextPage = false,
  isFetching = false,
  isError = false,
}) {
  return (
    <LoadComponent isLoading={isLoading} isError={isError}>
      <Container
        pb="lg"
        px="lg"
        style={{
          display: "flex",
          overflow: "auto",
          alignItems: "center",
          gap: "2rem"
        }}
      >
        {data?.map((page) =>
          page.map((item, idx) => {
            return (
              <Tooltip label={item.author} withArrow key={idx}>
                <Avatar size={130} radius={130} />
              </Tooltip>
            );
          })
        )}

        {(isFetchingNextPage || hasNextPage) && (
          <div>
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
      </Container>
    </LoadComponent>
  );
}
