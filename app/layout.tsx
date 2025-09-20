import type { Metadata } from 'next';
import Providers from '../components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Notes made simple',
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode; 
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          {modal}
        </Providers>
      </body>
    </html>
  );
}

