
import { Container, Loader } from '@mantine/core';

export default function LoadComponent({children, isLoading}){
    let LoadChildren = children
    if(isLoading){
      LoadChildren = (<Container p="xl" style={{
        display: 'flex',
        justifyContent:'center'
      }}><Loader /></Container>)
    }
    return LoadChildren
}