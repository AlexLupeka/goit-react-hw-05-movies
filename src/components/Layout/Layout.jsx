import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from '../AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import { Container } from './Layout.styled.jsx';

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} />
    </Container>
  );
}
