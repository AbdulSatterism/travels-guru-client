import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Book from './components/Book/Book';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import Main from './Layout/Main';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://travel-guru-server-snowy-eight.vercel.app/travels')
        },
        {
          path: '/travels/:id',
          element: <Explore></Explore>,
          loader: ({ params }) => fetch(`https://travel-guru-server-snowy-eight.vercel.app/travels/${params.id}`)
        },
        {
          path: '/book/:id',
          element: <Book></Book>,
          loader: ({ params }) => fetch(`https://travel-guru-server-snowy-eight.vercel.app/book/${params.id}`)
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
