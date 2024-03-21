import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  rem,
  Badge,
  Paper,
  Container,
  Button,
} from "@mantine/core";
import LoadComponent from "./LoadingComponent";

const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    content: "News Author",
    jumlah: "5,001",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    name: "Jill Jailbreaker",
    content: "Excerpt",
    jumlah: "2,000,000",
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Henry Silkeater",
    content: "Tags",
    jumlah: "5,000,000",
  },
];
export default function MetaDataLists({
  data = [],
  isLoading = false,
  fetchNextPage,
  hasNextPage = false,
  isFetchingNextPage = false,
  isFetching = false,
  isError = false,
}) {
  const rows = data?.map((page) => {
    return (
      <>
        {page.map((item, idx) => {
          return (
            <Table.Tr key={idx}>
              <Table.Td>
                <Group gap="sm">
                  <Avatar size={60} radius="sm">
                    {item.tags[0]}
                  </Avatar>
                  <div>
                    <Text fz="sm" fw={500}>
                      {item.tags}
                    </Text>
                    <Text c="dimmed" fz="xs">
                      by {item.author}
                    </Text>
                  </div>
                </Group>
              </Table.Td>
              <Table.Td ta="right">
                <Text size="lg" color="blue">
                  {item.tag_count}
                </Text>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </>
    );
  });
  return (
    <>
      <Container p="lg">
        <Paper shadow="none" p="xl" bg="#eaf3fd">
          <Text component="p" fw="bold" ta="center" size="xl" color="#1D72FE">
            META DATA
          </Text>
          <Text component="p" ta="center" size="sm" color="#1D72FE">
            ​information that describes other information in order to help you
            understand or use it.
          </Text>
        </Paper>
      </Container>
      <LoadComponent isLoading={isLoading} isError={isError} isEmpty={data.length}>
        <Table.ScrollContainer
          p="lg"
          pt="0"
          style={{
            maxHeight: "400px",
            overflow: "auto",
          }}
        >
          <Table verticalSpacing="md">
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {(isFetchingNextPage || hasNextPage) && (
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
              </Button>
            )}
          </div>
        </Table.ScrollContainer>
      </LoadComponent>
    </>
  );
}
