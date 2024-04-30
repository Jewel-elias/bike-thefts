import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Home from './components/features/home';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.layer.css';
import '@mantine/notifications/styles.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 1 } },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <Layout>
          <Home />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} position="left" />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
