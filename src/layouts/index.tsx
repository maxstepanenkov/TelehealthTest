import React, { FC } from 'react';
import Header from './header';
import FormContainer from '../components/FormContainer';
import Footer from './footer';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // some auth guard
    <div className='h-auto'>
      <Header />
      <FormContainer>
        {children}
      </FormContainer>
    </div>
  );
}

export default Layout;