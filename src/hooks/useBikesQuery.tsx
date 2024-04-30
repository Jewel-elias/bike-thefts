import { UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
import { BACKEND_URL } from '../data/constants';
import { bikesType, countType } from '../types/bikes';
import { buildQueryKey } from '../utilities/build-query-key';
import { notifications } from '@mantine/notifications';

interface getBikeQueryProps {
  params?: {
    page?: number;
    location?: string;
    distance?: number;
    stolenness?: 'proximity' | 'non' | 'stolen' | 'all';
    query?: string;
  };
}

const getBikesRequest = (props: getBikeQueryProps) =>
  axios
    .get(`${BACKEND_URL}/search`, {
      params: { ...props?.params, per_page: 10 },
    })
    .then((res) => res.data.bikes)
    .catch(() => {
      notifications.show({
        message: 'Error Fetching Data',
      });
    });

export const getBikesQuery = (
  props: getBikeQueryProps
): UseQueryOptions<bikesType[]> => {
  return {
    queryKey: buildQueryKey([
      'get',
      'bikes',
      props?.params?.page,
      (props?.params?.query?.length as number) > 3
        ? props?.params?.query
        : null,
    ]),
    queryFn: () => getBikesRequest(props),
    enabled:
      (props?.params?.query?.length as number) > 3 ||
      (props?.params?.query?.length as number) === 0 ||
      !props?.params?.query,
  };
};

const getBikesCountRequest = (props: getBikeQueryProps) =>
  axios
    .get(`${BACKEND_URL}/search/count`, {
      params: { ...props?.params, per_page: 10 },
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
    });

export const getBikesCountQuery = (
  props: getBikeQueryProps
): UseQueryOptions<countType> => ({
  queryKey: buildQueryKey([
    'get',
    'bikes-count',
    props?.params?.page,
    (props?.params?.query?.length as number) > 3 ? props?.params?.query : null,
  ]),
  queryFn: () => getBikesCountRequest(props),
  enabled:
    (props?.params?.query?.length as number) > 3 ||
    (props?.params?.query?.length as number) === 0 ||
    !props?.params?.query,
});
