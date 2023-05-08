import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"; 
import ErrorPage from "./pages/Error";

import HomePage from './pages/Home';
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import AlbumsPage from "./pages/Albums";
import ProductPage from "./pages/Product";


// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'products', element: <ProductsPage/>},
      {path: 'products/:id', element: <ProductPage/>},
      {path: '/albums', element: <AlbumsPage/>, children: [
        
      ]
    }
    ],
  },
]);



function App() {
  return (
    <div className="app__container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
