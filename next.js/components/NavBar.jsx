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
            marginRight: '1em',
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          style={{
            backgroundColor: router.pathname === '/about' ? 'skyblue' : 'gray',
            marginRight: '1em',
          }}
        >
          About
        </a>
      </Link>
      <Link href="/pokemon">
        <a
          style={{
            backgroundColor:
              router.pathname === '/pokemon' ? 'skyblue' : 'gray',
          }}
        >
          Pokemon
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
