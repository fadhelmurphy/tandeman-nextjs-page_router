// pages/index.js
import React from 'react';
import DashboardLayout from '@/containers/layout/dashboard/dashboard';
import { useAllKeywords } from '@/hooks/landing-hook';
const Home = () => {

  const { data: allKeywordsData } = useAllKeywords();
  console.log(allKeywordsData, "allKeywordsData")
  return (
    <>
    <DashboardLayout>
      xxxxx
      </DashboardLayout>
    </>
  );
};

export default Home;
