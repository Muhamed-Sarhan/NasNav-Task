import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <Breadcrumbs aria-label='breadcrumb' className='breadcrumb'>
      <Link color='inherit' href='/' onClick={handleClick}>
        Men
      </Link>
      <Link
        color='inherit'
        href='/getting-started/installation/'
        onClick={handleClick}
      >
        Clothing
      </Link>
      <Link
        color='inherit'
        href='/getting-started/installation/'
        onClick={handleClick}
      >
        Tops
      </Link>
      <Link
        color='inherit'
        href='/getting-started/installation/'
        onClick={handleClick}
      >
        Adidas
      </Link>
      <Link
        color='textPrimary'
        href='/components/breadcrumbs/'
        onClick={handleClick}
        aria-current='page'
      >
        Adidas Black T-shirt
      </Link>
    </Breadcrumbs>
  );
}
