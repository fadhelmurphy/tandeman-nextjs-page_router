import { Container, Loader, Text } from "@mantine/core";

export default function LoadComponent({
  children,
  isLoading = false,
  isError = false,
  isEmpty = false,
  customEmptyComponent = false | <></>
}) {
  const errOrEmpTxt = isError ? "Error fetching data" : "Empty data";
  if (isError || isEmpty)
    if(!customEmptyComponent)
    return (
      <Container
        p="xl"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text component="p" c="grey">
          {errOrEmpTxt}
        </Text>
      </Container>
    );
    else return customEmptyComponent
  let LoadChildren = children;
  if (isLoading) {
    LoadChildren = (
      <Container
        p="xl"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Loader />
      </Container>
    );
  }
  return LoadChildren;
}
