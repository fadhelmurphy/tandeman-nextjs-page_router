import React from "react";
import { Grid } from "@mantine/core";
import SectionBox from "../sections/Box";
import LoadComponent from "@/components/LoadingComponent";
import FilterButton from "@/components/FilterButton";

export default function TwoColumnsGrid({
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
  console.log(ChildrenRight.props.children, "ChildrenRight");
  const isRightTitleArr = Array.isArray(rightTitle);
  const isLeftTitleArr = Array.isArray(leftTitle);
  return (
    <Grid columns={12} mb="xl">
      <Grid.Col span={6} pr="md">
        {!isLeftTitleArr && (
          <SectionBox
            title={leftTitle}
            RightButtonComponent={
              leftDropdownText &&
              leftDataDropdown.length > 0 && (
                <FilterButton
                  buttonText={leftDropdownText}
                  data={leftDataDropdown}
                />
              )
            }
          >
            <LoadComponent isLoading={isLeftLoading}>
              {ChildrenLeft}
            </LoadComponent>
          </SectionBox>
        )}
      </Grid.Col>
      <Grid.Col span={6} pl="md">
        {!isRightTitleArr && (
          <SectionBox
            title={rightTitle}
            RightButtonComponent={
              rightDropdownText &&
              rightDataDropdown.length > 0 && (
                <FilterButton
                  buttonText={rightDropdownText}
                  data={rightDataDropdown}
                />
              )
            }
          >
            <LoadComponent isLoading={isRightLoading}>
              {ChildrenRight}
            </LoadComponent>
          </SectionBox>
        )}

        {isRightTitleArr &&
          ChildrenRight.props.children.map((children, idx) => {
            const isRightDropdownMultiple = (rightDropdownText[idx] || null)
            return (
              (
                <SectionBox
                  key={idx}
                  title={rightTitle[idx]}
                  RightButtonComponent={
                    isRightDropdownMultiple &&
                    rightDataDropdown[idx]?.length > 0 && (
                      <FilterButton
                        buttonText={rightDropdownText[idx]}
                        data={rightDataDropdown[idx]}
                      />
                    )
                  }
                >
                  <LoadComponent isLoading={isRightLoading}>
                    {children}
                  </LoadComponent>
                </SectionBox>
              )
            )
          })}
      </Grid.Col>
    </Grid>
  );
}
