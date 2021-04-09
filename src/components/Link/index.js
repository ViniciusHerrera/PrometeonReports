import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Link({ href, children, className, ...props }) {
  const { pathname } = useRouter();

  /* Verifica se o link é ativo */
  let cname = className || '';
  cname = pathname === href ? `${cname} active` : cname;

  return (
    <NextLink href={href} 
      replace={true}
      passHref
    >
      <a 
        className={cname}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
}

/* Define como serão os dados passados para nossa aplicação */
Link.propTypes = {
  href:  PropTypes.string.isRequired,
};