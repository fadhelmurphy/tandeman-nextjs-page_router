import { AppShell, Container, Paper, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarNested } from "Components/NavbarNested";
import { HeaderSearch } from "Components/HeaderSearch";
import classes from "./dashboard.module.css";
import { useGlobalUserStore } from "@/stores/user-store";

function CalendarLayout({ children, title = "Dashboard" }) {
  const [opened, { toggle }] = useDisclosure(true);
  const getUser = useGlobalUserStore((state) => state.user);

  return (
    <AppShell
      layout="alt"
      header={{
        height: 70,
      }}
      footer={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "md",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding={0}
    >
      <AppShell.Header
        className={classes.header}
        py="sm"
        px="lg"
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HeaderSearch
          {...{
            toggle,
            userFullName: getUser?.name,
            userPicture: getUser?.picture,
          }}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container
          fluid
          style={{
            zIndex: "100",
            position: "relative",
          }}
          p="xl"
          pt={0}
        >
          <Paper shadow="md" radius="sm" p="lg">
            <Title order={2}>{title}</Title>
          </Paper>
          <Container fluid py="xl" my="xl" style={{
            padding: 0
          }}>
            {children}
          </Container>
        </Container>
      </AppShell.Main>
      <AppShell.Footer style={{
          position: "absolute",
          bottom: "unset"
      }} p="md">
        <Container fluid px="lg">
          Footer here
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}

export default CalendarLayout;
