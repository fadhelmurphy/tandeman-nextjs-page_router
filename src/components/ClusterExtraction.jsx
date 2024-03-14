import { Text, Avatar, Group, Container, Button } from "@mantine/core";

export default function ClusterExtraction({ data = [], isLoading, fetchNextPage }) {
  return (
    <>
    <Container
      px="lg"
      style={{
        maxHeight: "400px",
        overflow: "auto",
      }}
    >
      {data?.map((page, index) => {
        return (
          <div key={index}>
            {page.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "2rem"
                }}
              >
                <div>
                  <Avatar
                    size={50}
                    radius="xl"
                  />
                </div>
                <div>
                  <Text pl="md" size="md" fw="bold" component="h3">
                    {item.keyword}
                  </Text>
                  <Text pl="md" size="sm" color="grey">
                    {item.topic}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        );
      })}

    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>

      <Button
        variant="light"
        size="md"
        radius="xl"
        mb="lg"
        loading={isLoading}
        onClick={() => fetchNextPage()}
      >
        SEE MORE
      </Button>
    </div>
    </Container>
    </>
  );
}
