import { Avatar, Container, Tooltip } from "@mantine/core";
export default function Authors() {
  return (
    <Container
      p="xl"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5%",
      }}
    >
      <Tooltip label="Tooltip" withArrow>
        <Avatar size={130} radius={130} />
      </Tooltip>
      <Tooltip label="Tooltip" withArrow>
        <Avatar size={130} radius={130} />
      </Tooltip>
      <Tooltip label="Tooltip" withArrow>
        <Avatar size={130} radius={130} />
      </Tooltip>
      <Tooltip label="Tooltip" withArrow>
        <Avatar size={130} radius={130} />
      </Tooltip>
    </Container>
  );
}
