
import { Container, Loader, Text } from '@mantine/core';

export default function LoadComponent({children, isLoading = false, isError = false}){
    if (isError) return <Container p="xl" style={{
        display: 'flex',
        justifyContent:'center'
      }}>
        <Text component='p' c="grey">Error fetching data</Text>
      </Container>;
    let LoadChildren = children
    if(isLoading){
      LoadChildren = (<Container p="xl" style={{
        display: 'flex',
        justifyContent:'center'
      }}><Loader /></Container>)
    }
    return LoadChildren
}