import { Container, Group, Text } from '@mantine/core';

export default function Footer() {
  return (
    <Container size="xl" h="100%">
      <Group justify="space-between">
        <Text fz="xl" fw={700}>
          Logo
        </Text>
        <Text>&copy; Jewel Elias,All rights reserved</Text>
      </Group>
    </Container>
  );
}
