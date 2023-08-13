import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="counter" element={<Counter />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </main>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/counter">About</Link>
          </li>
          {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

     

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
