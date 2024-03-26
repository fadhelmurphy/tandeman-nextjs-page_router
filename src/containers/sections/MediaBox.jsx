import LoadComponent from '@/components/LoadingComponent';
import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem, Loader, Container } from '@mantine/core';
import { IconError404, IconArticle, IconBrandYoutube, IconBrandTwitter, IconNews } from '@tabler/icons-react';

const iconList = {
    media: IconArticle,
    "youtube comments": IconBrandYoutube,
    "youtube videos": IconBrandYoutube,
    twitter: IconBrandTwitter,
    news: IconNews
}

const EmptyComponent = (
  <Paper radius="md" shadow='md'>
    <Group gap={5}>
    <div className="MediaBox__StatsIcon">
      <IconError404
        color="white"
        size={40}
      />
    </div>
    
<style jsx>
    {`
    .MediaBox__StatsIcon {
        background: black;
        width: 80px;
        height: 80px;
        margin: 10px;
        border-radius: 10px;
        line-height: 94px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `}
</style>
      <div>
        <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
          Empty Data
        </Text>
        <Text fw={700} size="xl">
          0
        </Text>
      </div>
    </Group>
  </Paper>)

export default function SectionMediaBox({data = [], isLoading = false, isError = false}) {
  const stats = data.length ? data?.map((stat, idx) => {
    const Icon = iconList[stat.platform] || IconArticle
    return (
      <Paper radius="md" shadow='md' key={idx}>
        <Group gap={5}>
        <div className="MediaBox__StatsIcon">
          <Icon
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
            border-radius: 10px;
            line-height: 94px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        `}
    </style>
          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.platform}
            </Text>
            <Text fw={700} size="xl">
              {stat.count}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  }) : [];

  return <SimpleGrid cols={{ base: 1, sm: 5 }} my="xl">
    <LoadComponent isLoading={isLoading} isError={isError} isEmpty={!data.length} customEmptyComponent={EmptyComponent}>
      {stats}
    </LoadComponent>
  </SimpleGrid>;
}