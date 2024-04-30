import { Box, Button, Flex, Group, Text } from '@mantine/core';

export default function Sidebar() {
  return (
    <Box p={15}>
      <Flex direction="column" align="center" gap={10}>
        <Text fz="xl" fw={700} mb={10}>
          Logo
        </Text>
        <Text fw={600}>Home</Text>
        <Group mt={10}>
          <Button variant="default">Log in</Button>
          <Button>Register</Button>
        </Group>
      </Flex>
    </Box>
  );
}
