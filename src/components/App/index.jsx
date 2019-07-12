import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

export default function App() {
  return (
    <Fragment>
      <ToastContainer hideProgressBar />
      <Routes />
    </Fragment>
  );
}
