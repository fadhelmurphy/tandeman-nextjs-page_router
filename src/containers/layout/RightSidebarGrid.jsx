import React from "react";
import { Grid } from "@mantine/core";
import SectionBox from "../sections/Box";
import LoadComponent from "@/components/LoadingComponent";
import FilterButton from "@/components/FilterButton";

export default function RightSidebarGrid({
  rightTitle = "",
  leftTitle = "",
  ChildrenLeft = <></>,
  ChildrenRight = <></>,
  isLeftLoading = false,
  isRightLoading = false,
  leftDropdownText = null,
  rightDropdownText = null,
  leftDataDropdown = [],
  rightDataDropdown = [],
}) {
  return (
    <Grid columns={12} mb="xl">
      <Grid.Col span={8}>
        <SectionBox
          title={leftTitle}
          RightButtonComponent={
            leftDropdownText && leftDataDropdown.length > 0 && (<FilterButton buttonText={leftDropdownText} data={leftDataDropdown} />)
          }
        >
          <LoadComponent isLoading={isLeftLoading}>
            {ChildrenLeft}
          </LoadComponent>
        </SectionBox>
      </Grid.Col>
      <Grid.Col span={4}>
        <SectionBox
          title={rightTitle}
          RightButtonComponent={
            rightDropdownText && rightDataDropdown.length > 0 && (<FilterButton buttonText={rightDropdownText} data={rightDataDropdown} />)
          }
        >
          <LoadComponent isLoading={isRightLoading}>
            {ChildrenRight}
          </LoadComponent>
        </SectionBox>
      </Grid.Col>
    </Grid>
  );
}
