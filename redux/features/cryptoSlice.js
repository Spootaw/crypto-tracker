import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3',
  }),
  tagTypes: [],
  endpoints: builder => ({
    getCrypto: builder.query({
      query: () => 'coins/markets?vs_currency=usd&page=1&per_page=20&price_change_percentage=24h,7d',
    }),
  }),
});

export const { useGetCryptoQuery } = cryptoApi;
