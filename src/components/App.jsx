import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Button from '@components/common/Button';

export default function App() {
  return (
    <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
      <Header />
      <Button type="outlined" text="Submit" color="blue" />
      <Button type="solid" text="Delete" color="red" />
      <Button type="outlined" text="Login" color="green" stretch />
      <Button type="solid" text="Post" color="blue" stretch />
      <Button type="regular" text="Regular" color="green" />
      <Footer />
    </div>
  );
}
