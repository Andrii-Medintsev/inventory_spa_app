import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route
//         path='/'
//         element={<App />}
//       />
//     </Route>
//   )
// );

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const Root = () => (
  <Router>
    <App />
  </Router>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);
