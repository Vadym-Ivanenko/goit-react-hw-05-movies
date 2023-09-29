import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
