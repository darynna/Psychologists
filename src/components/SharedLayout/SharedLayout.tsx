import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import {Container} from "./SharedLayout.styled"
import {Header} from "./../Header/Header"

export const SharedLayout = () => {
  return (
    <>
    <Header />
    <main>
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  </>
  );
};