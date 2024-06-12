// src/components/layout.tsx
import { ReactNode } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Header from './partials/header';
import Sidebar from './partials/sidebar';
import '../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <SignedOut>
        <div className="flex items-center justify-center min-h-screen">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </SignedIn>
    </div>
  );
};

export default Layout;
