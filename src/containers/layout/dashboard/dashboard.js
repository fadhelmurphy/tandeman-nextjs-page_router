"use client";

import {
  AppShell,
  Container,
  Paper,
  Title
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarNested } from "Components/NavbarNested";
import { HeaderSearch } from "Components/HeaderSearch";
import classes from "./dashboard.module.css";

function CalendarLayout({ children, title = "Dashboard" }) {
  const [opened, {toggle}] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ 
        height: 70,
        position: "absolute",
       }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HeaderSearch {...{toggle}} />
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container fluid style={{
          zIndex: "100",
          position: 'relative'
        }}>
        <Paper shadow="md" radius="sm" p="md">
          <Title order={2}>{title}</Title>
        </Paper>
        {children}
        </Container>
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Container fluid px="lg">
          Footer here
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}

export default CalendarLayout;
