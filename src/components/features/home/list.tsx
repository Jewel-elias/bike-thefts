import { useQuery } from '@tanstack/react-query';
import { getBikesQuery } from '../../../hooks/useBikesQuery';
import {
  BackgroundImage,
  Box,
  Card,
  Center,
  Flex,
  Image,
  Loader,
  Stack,
  Text,
  Title,
} from '@mantine/core';

interface listProps {
  activePage: number;
  caseTitle: string;
}
export default function List({ activePage, caseTitle }: listProps) {
  //* ************************Queries*************************************

  const { data, isLoading, isError } = useQuery({
    ...getBikesQuery({
      params: {
        page: activePage,
        location: 'Munich',
        distance: 100,
        stolenness: 'proximity',
        query: caseTitle,
      },
    }),
  });

  if (isLoading)
    return (
      <Center>
        <Loader />
      </Center>
    );

  if (isError)
    return (
      <Center>
        <Title order={2}>Something error...</Title>
      </Center>
    );

  if (data?.length === 0)
    return (
      <Center>
        <Title order={2}>
          There is no reported bike thefts for the Munich area
        </Title>
      </Center>
    );
  return (
    <Stack>
      {data?.map((bike) => {
        var t = new Date(bike.date_stolen * 1000);
        var formatted =
          t.getDate() +
          '/' +
          t.getDay() +
          '/' +
          t.getFullYear() +
          ', ' +
          ('0' + t.getHours()).slice(-2) +
          ':' +
          ('0' + t.getMinutes()).slice(-2);

        return (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Flex gap={30}>
              <Box>
                {bike.large_img ? (
                  <Image
                    radius="md"
                    w={300}
                    h={200}
                    src={bike.large_img}
                    fit="cover"
                  />
                ) : (
                  <BackgroundImage src="" bg="gray" w={300} h={200} radius={10}>
                    <Center c="white" opacity={0.8} w="100%" h="100%">
                      No Image
                    </Center>
                  </BackgroundImage>
                )}
              </Box>
              <Flex direction="column" justify={'space-around'}>
                <Flex gap={10}>
                  <Text fw={700}>Title:</Text>
                  <Text>{bike.title}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text fw={700}>Description:</Text>
                  <Text>{bike.description}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text fw={700}>Date of the theft:</Text>
                  <Text>{formatted}</Text>
                </Flex>
                <Flex gap={10}>
                  <Text fw={700}>Date of when the case was reported:</Text>
                  <Text>{formatted}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        );
      })}
    </Stack>
  );
}
