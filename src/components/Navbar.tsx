import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="navbar bg-dark mb-5">
      <div className="container d-flex justify-content-center">
        <Link className="navbar-brand" to={'/'}>
          <img
            src='../../public/Eye-white.svg'
            alt=""
            width="40"
            height="30"
          />
        </Link>
      </div>
    </nav>
  );
};
