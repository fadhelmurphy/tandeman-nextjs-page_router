import {useState} from "react"
import cx from 'clsx';
import { Group, 
  Burger, 
  rem, 
  Container, 
  Avatar, 
  Text, 
  Menu, 
  UnstyledButton, 
  useMantineTheme,
  Autocomplete
 } from '@mantine/core';
import { 
  IconChevronDown, 
  IconHeart, 
  IconStar, 
  IconMessage, 
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
  IconPlayerPause,
  IconTrash,
  IconSearch
 } from '@tabler/icons-react';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
  'Home',
  'Orders',
  'Education',
  'Community',
  'Forums',
  'Support',
  'Account',
  'Helpdesk',
];
export function HeaderSearch({toggle}) {
  const theme = useMantineTheme();

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <>

<Container
          fluid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div 
          style={{
            display: "flex",
            alignItems: "center"
          }}>
          <Burger onClick={toggle}  aria-label="Toggle navigation" size="md" mr="1rem" color="white" />
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            comboboxProps={{ shadow: 'md' }}
            rightSection={<IconSearch style={{ width: rem(16), height: rem(24) }} stroke={1.5} />}
            data={[
              { group: 'Frontend', items: ['React', 'Angular'] },
              { group: 'Backend', items: ['Express', 'Django'] },]}
            visibleFrom="xs"
            size="md"
            radius="sm"
          />
          </div>
      <div className={classes.inner}>

        <Group>
          <Group ml={25} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Menu shadow="md"
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text color="#fff" fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown color="#fff" style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <IconHeart
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                }
              >
                Liked posts
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconStar
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                  />
                }
              >
                Saved posts
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconMessage
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                }
              >
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Account settings
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Change account
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Logout
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Pause subscription
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              >
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </div>
      </Container>
    </>
  );
}