import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root,{loader as rootloader, action as rootaction} from './routes/root';
import ErrorPage from './error-page';
import Contact,{loader as contactLoader} from './routes/contact';
import EditContact,{action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from './routes';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:rootloader,
    action:rootaction,
    children:[
      { index: true, element: <Index /> },
      {
        path:"/contacts/:contactId",
        element:<Contact></Contact>,
        loader:contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action:editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
