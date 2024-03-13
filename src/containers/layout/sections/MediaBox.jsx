import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem, Loader, Container } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight, IconArticle, IconBrandYoutube, IconBrandTwitter, IconNews } from '@tabler/icons-react';

const iconList = {
    'media': IconArticle,
    'yotube': IconBrandYoutube,
    'twitter': IconBrandTwitter,
    'news': IconNews
}

export default function SectionMediaBox({data, isLoading}) {
  const stats = data?.map((stat, idx) => {
    const Icon = iconList[stat.platform] || IconArticle
    return (
      <Paper radius="md" shadow='md' key={idx}>
        <Group>
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
  });

  let LoadChildren = stats
  if(isLoading){
    LoadChildren = (<Container p="xl" style={{
      display: 'flex',
      justifyContent:'center'
    }}><Loader /></Container>)
  }

  return <SimpleGrid spacing="xl" cols={{ base: 1, sm: 4 }} my="xl">
    {LoadChildren}
  </SimpleGrid>;
}