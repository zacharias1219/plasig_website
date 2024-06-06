// src/components/layout.tsx
import { ReactNode } from 'react';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Header from './partials/header';
import Sidebar from './partials/sidebar';
import '../styles/globals.css'; // Update the import to use the correct path

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ClerkProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </ClerkProvider>
  );
};

export default Layout;
