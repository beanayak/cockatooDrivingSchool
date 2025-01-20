import './globals.css';
import './lib/fontawesome';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Footer from './components/Footer';
import Headers from './components/Header';
import HeaderTop from './components/HeaderTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cockatoo Driving School - Driving School in Nowra & Suburbs',
  description: 'Learn to drive with confidence in Nowra and surrounding suburbs. Professional instructors, tailored lessons, and comprehensive courses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Driving School Nowra, Driving Lessons Nowra, Learn to Drive Nowra, Driving Instructor Nowra, Driving Courses Nowra,Driving School Near Me Nowra" />
        <meta name="author" content="Cockatoo Driving School" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/carousel-2.png" />
        <meta property="og:url" content="https://www.cockatoodrivingschool.com" />


        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CDS NOWRA",
            "description": metadata.description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Nowra",
              "addressRegion": "NSW",
              "postalCode": "2541",
              "addressCountry": "AU",
            },
            "telephone": "+61 400 000 000",
            "openingHours": "Mo-Fr 06:00-21:00",
            "url": "https://www.cockatoodrivingschool.com",
          })}
        </script>
      </Head>
     <body className={inter.className}>
      <HeaderTop />
        <Headers/>
        {/* Main Content */}
        <main>
          {children}
        </main>
        {/* Toast Notifications */}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}
