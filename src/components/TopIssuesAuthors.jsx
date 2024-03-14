import { Avatar, Table, Group, Text, ActionIcon, Menu, rem, Badge } from '@mantine/core';

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    issue: 'Kelangkaan Beras',
    status: 'not_finished',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
    name: 'Jill Jailbreaker',
    issue: 'Suara Sah Pemilu',
    status: 'completed',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Henry Silkeater',
    issue: 'Harga Bahan Bakar',
    status: 'progress',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    issue: 'Hak Angket',
    status: 'not_finished',
  },
];

const statusColors = {
    not_finished: 'red',
    completed: 'green',
    progress: 'yellow',
  };
export default function TopIssuesAuthors() {
  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.issue}
            </Text>
            <Text c="dimmed" fz="xs">
              {item.name}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td ta="right">
        <Badge size="lg" color={statusColors[item.status.toLowerCase()]} variant="light">
          {item.status.replace("_", " ")}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer p="lg" pt="0">
      <Table verticalSpacing="md">
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}