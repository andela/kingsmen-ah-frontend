import React from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Button from '@components/common/Button';

const sayHello = () => {
  console.log('Hello World');
};

export default function App() {
  const user = { isAuthenticated: true, email: 'test@test.com' };
  const profile = {
    firstname: 'Emmanuel Okwara',
    avatar: 'https://avatarfiles.alphacoders.com/173/173060.jpg'
  };

  return (
    <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
      <Header user={user} profile={profile} />
      <Button type="outlined" text="outline" color="blue" onClick={sayHello} />
      <Button type="solid" text="solid" color="red" onClick={sayHello} />
      <Button
        type="outlined"
        text="outline stretch"
        color="green"
        stretch
        onClick={sayHello}
      />
      <Button
        type="solid"
        text="solid stretch"
        color="blue"
        stretch
        onClick={sayHello}
      />
      <Button type="regular" text="regular" color="green" onClick={sayHello} />
      <Footer />
    </div>
  );
}
