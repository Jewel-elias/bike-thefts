import { Pagination } from '@mantine/core';

interface PaginationProps {
  activePage: number;
  totalPages: number;
  setPage: (arg0: number) => void;
}
export default function PaginationBox({
  activePage=1,
  totalPages=10,
  setPage,
}: PaginationProps) {
  return (
    <Pagination value={activePage} onChange={setPage} total={totalPages} />
  );
}
