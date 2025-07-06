import { Link } from "react-router";
function Header() {
  return (
    <div className="bg-amber-300 flex items-center justify-around h-20 text-2xl">
      <Link to="/">
        {" "}
        <p>Home</p>
      </Link>
      <Link to="/cart">
        {" "}
        <p>cart</p>
      </Link>
    </div>
  );
}
export default Header;
