import { Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';

export function Header() {
  return (
    <div>
      <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
        <Link to="products">
          <img src={logo} alt="Logo" className="inline-block h-20" />
        </Link>

        <h1 className="text-2xl">React Tools</h1>
        <nav>
          <Link to="products" className="text-white no-underline p-1">
            Products
          </Link>
        </nav>
      </header>
    </div>
  );
}
