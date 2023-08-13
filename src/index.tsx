import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import { store } from "../src/app/store";
import { Provider } from "react-redux";
import PostsList from "./features/posts/PostsList";
import Counter from "./features/counter/Counter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/posts",
    element: <PostsList />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
