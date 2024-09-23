import { render, screen } from '@testing-library/react';
import App from './App';
import MyWorks from './pages/myworks/myworks';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "myworks",
    element: <MyWorks />
  }
]);

test('renders learn react link', () => {
  render(<RouterProvider router={router} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
