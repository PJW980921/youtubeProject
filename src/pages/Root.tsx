import { Outlet } from 'react-router-dom';
import SearchHeader from '../components/header/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

export default function Root() {
  const queryClient = new QueryClient();
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchHeader />
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </Suspense>
      </RecoilRoot>
    </>
  );
}
