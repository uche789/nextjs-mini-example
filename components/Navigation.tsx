import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  const linkDefinition = [
    { value: 'Home', link: '/' },
    { value: 'About Page', link: '/about' },
  ];
  const linkItems = linkDefinition.map((definition, index) => (
    <li className="nav-item" key={index}>
      <Link href={definition.link}>
        <a className="nav-link">{definition.value}</a>
      </Link>
      <style jsx>{`
        a {
          color: #fff;
        }

        a:hover {
          color: #acadac;
        }
      `}</style>
    </li>
  ));

  return (
    <nav className="text-white bg-dark navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
      <ul className="nav">
        {linkItems}      
      </ul>
    </nav>
  );
};