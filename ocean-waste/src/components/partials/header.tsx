// src/components/partials/header.tsx
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
