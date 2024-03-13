import React from 'react'
import {Container, Loader, Paper} from "@mantine/core"

export default function SectionBox({title = "Section Title", isLoading = false, children}) {

  let LoadChildren = children
  if(isLoading){
    LoadChildren = (<Container p="xl" style={{
      display: 'flex',
      justifyContent:'center'
    }}><Loader /></Container>)
  }

  return (
    <>
    <Paper className="SectionBox" shadow="md">
        <div className="SectionBox__header">
          <h4>{title}</h4>
        </div>
        <div className="SectionBox__body">
          {LoadChildren}
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
