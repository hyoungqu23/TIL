import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a
          style={{
            backgroundColor: router.pathname === '/' ? 'skyblue' : 'gray',
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          style={{
            backgroundColor: router.pathname === '/about' ? 'skyblue' : 'gray',
          }}
        >
          About
        </a>
      </Link>
      <Link href="/contact">
        <a
          style={{
            backgroundColor:
              router.pathname === '/contact' ? 'skyblue' : 'gray',
          }}
        >
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
