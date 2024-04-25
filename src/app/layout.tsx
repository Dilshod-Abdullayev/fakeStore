import Nav from '@/components/Navbar/Nav';
import { Providers } from './providers';
import './globals.css';
import Footer from '@/components/Navbar/Footer/Footer';
import QueryProvider from './QueryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <Providers>
            <div className='container mx-auto'>
              <Nav />
              {children}
              <Footer />
            </div>
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}

