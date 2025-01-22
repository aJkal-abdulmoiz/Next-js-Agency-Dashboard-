import React from 'react';
import '../../styles/global.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Manage your projects and talents efficiently.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
        <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="flex">
          <main className="flex-1 bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
