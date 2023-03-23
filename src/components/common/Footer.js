import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="has-text-right">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-end">
            <Link href="/license-information" className="navbar-item">
              ライセンス情報
            </Link>
            <Link href="/terms-conditions" className="navbar-item">
              取引条件・利用規約
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;