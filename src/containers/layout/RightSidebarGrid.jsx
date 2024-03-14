import React from 'react'
import { Grid } from '@mantine/core';
import SectionBox from '../sections/Box';
import LoadComponent from '@/components/LoadingComponent';


export default function RightSidebarGrid({ rightTitle = '', leftTitle = '', ChildrenLeft = <></>, ChildrenRight = <></>, isLeftLoading = false, isRightLoading = false}) {

  return (
    <Grid columns={12} mb="xl">
      <Grid.Col span={8}>
        <SectionBox title={leftTitle}>
          <LoadComponent isLoading={isLeftLoading}>
            {ChildrenLeft}
        </LoadComponent>
        </SectionBox></Grid.Col>
      <Grid.Col span={4}>
        <SectionBox title={rightTitle}>
          <LoadComponent isLoading={isRightLoading}>
            {ChildrenRight}
        </LoadComponent>
        </SectionBox>
        </Grid.Col>
    </Grid>
  )
}
