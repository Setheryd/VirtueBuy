import './tailwind.css';

import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';
import { ThemeProvider } from './context/ThemeContext';

// Rest of the file remains the same
export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}