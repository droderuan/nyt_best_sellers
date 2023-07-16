"app client";

import { BooksProvider } from "./useBooks";

const AppConfig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BooksProvider>{children}</BooksProvider>;
};

export default AppConfig;
