import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/router';
import { type PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <>
      {router.query.locale && <Navbar />}
      <main>{children}</main>
      {router.query.locale && <Footer />}
    </>
  );
}
