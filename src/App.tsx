import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videos from './pages/Videos.tsx';
import NotFound from './pages/NotFound.tsx';
import Root from './pages/Root.tsx';
import VideosDetail from './pages/VideosDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: '/',
        element: <Videos />,
      },
      {
        path: 'videos/:keyword',
        element: <Videos />,
      },
      {
        path: 'videos/watch/:videoId',
        element: <VideosDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
