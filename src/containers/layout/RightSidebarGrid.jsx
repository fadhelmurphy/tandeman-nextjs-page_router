import React from 'react'
import { Grid } from '@mantine/core';
import SectionBox from '../sections/Box';
import LoadComponent from '@/components/LoadingComponent';


export default function RightSidebarGrid({ rightTitle = '', leftTitle = '', childrenLeft = <></>, childrenRight = <></>, isLeftLoading = false, isRightLoading = false}) {

  return (
    <Grid columns={12} mb="xl">
      <Grid.Col span={8}>
        <SectionBox title={leftTitle}>
          <LoadComponent isLoading={isLeftLoading}>
            {childrenLeft}
        </LoadComponent>
        </SectionBox></Grid.Col>
      <Grid.Col span={4}>
        <SectionBox title={rightTitle}>
          <LoadComponent isLoading={isRightLoading}>
            {childrenRight}
        </LoadComponent>
        </SectionBox>
        </Grid.Col>
    </Grid>
  )
}
