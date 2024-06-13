// src/components/layout.tsx
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { ReactNode } from 'react';
import Header from './partials/header';
import Sidebar from './partials/sidebar';
import '../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className="min-h-screen flex flex-col bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
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
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;
