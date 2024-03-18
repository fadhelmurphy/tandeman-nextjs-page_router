
import { Container, Loader } from '@mantine/core';

export default function LoadComponent({children, isLoading = false, isError = false}){
    if (isError) return <div>Error fetching data</div>;
    let LoadChildren = children
    if(isLoading){
      LoadChildren = (<Container p="xl" style={{
        display: 'flex',
        justifyContent:'center'
      }}><Loader /></Container>)
    }
    return LoadChildren
}