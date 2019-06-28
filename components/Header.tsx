import Link from 'next/link';
function Header() {
  return (
    <>
      <nav>
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/page">
          <a> Page </a>
        </Link>
      </nav>
    </>
  );
}

export default Header;
