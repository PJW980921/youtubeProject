import { Outlet } from 'react-router-dom';
import SearchHeader from '../components/header/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

export default function Root() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
