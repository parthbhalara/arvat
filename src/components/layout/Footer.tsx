import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    { name: 'Compression Springs', href: '/products#compression' },
    { name: 'Extension Springs', href: '/products#extension' },
    { name: 'Torsion Springs', href: '/products#torsion' },
    { name: 'Double Torsion Springs', href: '/products#double-torsion' },
    { name: 'Conical Springs', href: '/products#conical' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1XXNKxbczE/?mibextid=wwXIfr',
      icon: FaFacebook,
    },
    {
      name: 'Youtube',
      href: 'https://youtube.com/@arvatspringtech',
      icon: FaYoutube,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/arvat-springtech/',
      icon: FaLinkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/arvatspringtech/',
      icon: FaInstagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Arvat Springtech LLP
            </Link>
            <p className="text-gray-400 text-base">
              Leading manufacturer of precision springs and wire forms.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Navigation
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Products
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Contact Us
              </h3>
              <div className="mt-4 space-y-4 text-base text-gray-300">
                <p>Godown no. 60, Ground Floor, Sunshine Industrial Hub -1 </p>
                <p>Navapura, Changodar</p>
                <p>Ahmedabad, Gujarat 382213</p>
                <p className="hover:text-white">
                  <a href="tel:+917600800472">+91 7600800472</a>
                </p>
                <p className="hover:text-white">
                  <a href="mailto:info@arvatspringtech.com">info@arvatspringtech.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Arvat Springtech LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 