import { useState } from 'react';
import { Box, Center, Flex, Loader, Text, TextInput } from '@mantine/core';
import PaginationBox from './pagination';
import List from './list';
import { useQuery } from '@tanstack/react-query';
import { getBikesCountQuery } from '../../../hooks/useBikesQuery';

export default function Home() {
  const [activePage, setPage] = useState(1);
  const [caseTitle, setCaseTitle] = useState('');
  //* ************************Queries*************************************

  const { data, isLoading, isError } = useQuery({
    ...getBikesCountQuery({
      params: {
        location: 'Munich',
        distance: 100,
        stolenness: 'proximity',
        query: caseTitle,
      },
    }),
  });

  return (
    <Box>
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        mb={30}
        direction={{ base: 'column', md: 'row' }}
        gap={30}
      >
        <Flex gap={10}>
          <Text fw={700}>Total Bike Theft Cases:</Text>
          {isLoading ? (
            <Loader size={'xs'} />
          ) : (
            <Text fw={700}>{data?.proximity}</Text>
          )}
          {isError && <Text c={'red'}>Error while fetching count...</Text>}
        </Flex>
        <TextInput
          w={{ base: '80%', md: '30%' }}
          placeholder="Search by Case Title"
          value={caseTitle}
          onChange={(e) => {
            setCaseTitle(e.target.value);
          }}
        />
        <PaginationBox
          activePage={activePage}
          totalPages={Math.ceil((data?.proximity as number) / 10)}
          setPage={setPage}
        />
      </Flex>
      <Center>
        <List activePage={activePage} caseTitle={caseTitle} />
      </Center>
    </Box>
  );
}
