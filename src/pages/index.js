// pages/index.js
import React from 'react';
import DashboardLayout from '@/containers/layout/dashboard';
import { useAllKeywords } from '@/hooks/landing-hook';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
// import { getServerAllKeywords } from '@/query/features/landing';
import { withSSRHandler } from '@/helpers/ssrHandler';
import KeywordsLists from '@/components/Keywords/KeywordsLists';
import SectionBox from 'Containers/layout/sections/Box';
import MediaBox from 'Containers/layout/sections/MediaBox';

const Home = () => {
  const { data: allKeywordsData } = useAllKeywords();
  return (
    <>
    <DashboardLayout>
      <SectionBox title='Keywords'>
      <KeywordsLists data={allKeywordsData}/>
      </SectionBox>
      <MediaBox />
      </DashboardLayout>
    </>
  );
};

// Fungsi getServerSideProps yang dipindahkan queryClient-nya
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: withSSRHandler(async (context, queryClient) => {
    // Menggunakan Promise.all untuk menunggu kedua query selesai di-fetch
    // await Promise.all([
    //   getServerAllKeywords(queryClient),
    // ]);
  
    // Mengembalikan props tambahan
    return {
      additionalProp: 'Nilai Props Tambahan',
    };
  }),
});
export default Home;
