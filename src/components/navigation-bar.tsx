import { CiSearch } from "react-icons/ci";

function Navigation() {
  return (
    <div>
      <div>Khudra Pasal</div>
      <div>Categories</div>
      <div>Deals</div>
      <div>What's New</div>
      <div>Delivery</div>
      <div>
        <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search here"></input>
      </div>
    </div>
  );
}

export default Navigation;
