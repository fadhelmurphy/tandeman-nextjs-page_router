import React from 'react'
import {Paper} from "@mantine/core"

export default function SectionBox({title = "Section Title", children}) {
  return (
    <>
    <Paper className="SectionBox" shadow="md">
        <div className="SectionBox__header">
          <h4>{title}</h4>
        </div>
        <div className="SectionBox__body">
          {children}
        </div>
    </Paper>
    <style jsx>
      {`
      .SectionBox {
        display: flex;
        flex-direction: column;
      }
      .SectionBox__header {
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
