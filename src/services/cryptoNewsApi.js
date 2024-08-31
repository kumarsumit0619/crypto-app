import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-key": "6ae65c6f51mshebb90c33131e2f7p16514bjsn03ce4dbdd8b7",
  "x-rapidapi-host": "google-news13.p.rapidapi.com",
};

const baseUrl = "https://google-news13.p.rapidapi.com";
//https://google-news13.p.rapidapi.com/search?safeSearch=Off&textFormat=Raw&freshness=Day&keyword=bitcoin&lr=en-US

const createRequest = (url) => {
  return { url, headers: cryptoNewsHeaders };
};

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `search?safeSearch=Off&textFormat=Raw&freshness=Day&keyword=${newsCategory}&lr=en-US&count=${count}`
          //   `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi; // Fix: use injectEndpoints
