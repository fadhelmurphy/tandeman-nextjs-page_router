import { Avatar, Table, Group, Text, ActionIcon, Menu, rem, Badge, Paper, Container } from '@mantine/core';

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    content: 'News Author',
    jumlah: "5,001",
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
    name: 'Jill Jailbreaker',
    content: 'Excerpt',
    jumlah: '2,000,000',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Henry Silkeater',
    content: 'Tags',
    jumlah: '5,000,000',
  },
];
export default function MetaDataLists() {
  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} radius="sm">{item.content[0]}</Avatar>
          <div>
            <Text fz="sm" fw={500}>
              {item.content}
            </Text>
            <Text c="dimmed" fz="xs">
              by {item.name}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td ta="right">
        <Text size="lg" color="blue">
          {item.jumlah.replace("_", " ")}
        </Text>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
    <Container p='lg'>
    <Paper shadow='none' p='xl' bg="#eaf3fd">
        <Text component='p' fw="bold" ta='center' size='xl' color='#1D72FE'>META DATA</Text>
        <Text component='p' ta='center' size='sm' color='#1D72FE'>​information that describes other information in order to help you understand or use it.</Text>
    </Paper>
    </Container>
    <Table.ScrollContainer p="lg" pt="0">
      <Table verticalSpacing="md">
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
    </>
  );
}