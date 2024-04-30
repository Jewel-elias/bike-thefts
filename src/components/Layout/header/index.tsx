import { Group, Button, Text, Burger, Container } from '@mantine/core';

type HeaderProps = {
  drawerOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ drawerOpened, toggleDrawer }: HeaderProps) {
  return (
    <Container size="xl" h="100%">
      <Group justify="space-between" h="100%">
        <Text fz="xl" fw={700}>
          Logo
        </Text>
        <Group h="100%" gap="md" visibleFrom="sm">
          <Text fw={600}>Home</Text>
        </Group>

        <Group visibleFrom="sm">
          <Button variant="default">Log in</Button>
          <Button>Register</Button>
        </Group>

        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      </Group>
    </Container>
  );
}
