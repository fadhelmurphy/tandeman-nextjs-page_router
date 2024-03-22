import { Avatar, Group, Text } from "@mantine/core";
import React from "react";

export default function AvatarLists({data = []}) {
  return (
    <Group display="flex" justify="start" gap="xl">
      {data.map((paslon, idx) => (
        <Group gap="sm" key={idx}>
          <Avatar key={idx} src={paslon.picture} size="lg" radius="100%" />
          <Text key={idx} component="h3" fz="lg" fw="bold" c="blue">
            {paslon.nama}
          </Text>
        </Group>
      ))}
    </Group>
  );
}
