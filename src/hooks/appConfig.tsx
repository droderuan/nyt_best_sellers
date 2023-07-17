"use client";

import { UseQueryProvider } from "./client";
import { NyTimesClientProvider } from "./client/nyTimesClient";
import { BooksProvider } from "./useBooks";

const AppConfig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UseQueryProvider>
      <NyTimesClientProvider>
        <BooksProvider>{children}</BooksProvider>
      </NyTimesClientProvider>
    </UseQueryProvider>
  );
};

export default AppConfig;
