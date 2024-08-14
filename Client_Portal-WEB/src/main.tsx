import React from 'react';
import ReactDOM from 'react-dom/client';

import { CssBaseline } from '@mui/material';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from 'src/App';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3, refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
