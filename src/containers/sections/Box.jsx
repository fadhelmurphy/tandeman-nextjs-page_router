import React from 'react'
import {Button, Paper} from "@mantine/core"
import LoadComponent from '@/components/LoadingComponent'

export default function SectionBox({
  title = "Section Title" || <></>, 
  isLoading = false, 
  children,
  RightButtonComponent = <></>,
}) {

  const isTitleString = typeof title === "string"
  return (
    <>
    <Paper className="SectionBox" shadow="md" mb="xl">
        <div className="SectionBox__header">
          {isTitleString ? (<h4>{title}</h4>) : title}
          {RightButtonComponent}
        </div>
        <div className="SectionBox__body">
          <LoadComponent isLoading={isLoading}>
          {children}
          </LoadComponent>
        </div>
    </Paper>
    <style jsx>
      {`
      .SectionBox {
        display: flex;
        flex-direction: column;
      }
      .SectionBox__header {
        display: flex;
        justify-content: space-between;
        padding: 15px 25px;
      }
      .SectionBox__header h4 {
        margin: 0;
        color: var(--mantine-color-blue-6);
      }
      `}
    </style>
    </>
  )
}
