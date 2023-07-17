"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { ListBookDto } from "./dtos";

interface NyTimesClientContextData {
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
  data: { lists: ListBookDto[] } | undefined;
}

interface NyTimesClientProvider {
  children: React.ReactNode;
}

const NyTimesClientContext = createContext<NyTimesClientContextData>(
  {} as NyTimesClientContextData
);

const NyTimesClientProvider: React.FC<NyTimesClientProvider> = ({
  children,
}) => {
  const { isLoading, isFetching, error, data } = useQuery<{
    results: { lists: ListBookDto[] };
  }>({
    queryKey: ["full-overview"],
    queryFn: () =>
      fetch(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=PXMWQzaFGJa4tkqT7GYDpHkPnLrp6jm3"
      ).then((response) => response.json()),
  });

  return (
    <NyTimesClientContext.Provider
      value={{ isLoading, isFetching, error, data: data?.results }}
    >
      {children}
    </NyTimesClientContext.Provider>
  );
};

function useNyTimesClient(): NyTimesClientContextData {
  const context = useContext(NyTimesClientContext);

  if (!context) {
    throw new Error("useBooks must be used within BooksProvider");
  }

  return context;
}

export { useNyTimesClient, NyTimesClientProvider };
