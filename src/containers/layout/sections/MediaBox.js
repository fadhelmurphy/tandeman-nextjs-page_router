import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight, IconArticle } from '@tabler/icons-react';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const data = [
  { label: 'Page views', stats: '456,578', progress: 65, color: 'teal', icon: 'up' },
  { label: 'New users', stats: '2,550', progress: 72, color: 'blue', icon: 'up' },
  {
    label: 'Orders',
    stats: '4,735',
    progress: 52,
    color: 'red',
    icon: 'down',
  },
  { label: 'Page views', stats: '456,578', progress: 65, color: 'teal', icon: 'up' },
];

export default function SectionMediaBox() {
  const stats = data.map((stat) => {
    return (
      <Paper radius="md" shadow='md' key={stat.label}>
        <Group>
        <div className="MediaBox__StatsIcon">
          <IconArticle
            color="white"
            size={40}
          />
        </div>
        
    <style jsx>
        {`
        .MediaBox__StatsIcon {
            background: ${stat.color};
            width: 80px;
            height: 80px;
            margin: 10px;
            border-radius: 3px;
            line-height: 94px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        `}
    </style>
          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return <SimpleGrid spacing="xl" cols={{ base: 1, sm: 4 }} my="xl">
    {stats}
  </SimpleGrid>;
}