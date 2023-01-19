import { useContext } from "react";
import { useState } from "react";
import styles from "./Styles/general.module.css";
import { ModeContext } from "../Context/ModeContext";
import { initialState } from "../Reducer/reducer";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const { mode, setMode } = useContext(ModeContext);
  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  const selectHandler = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className={styles.Navbar}>
      <h1>
        <Link to="/">
          industry<span>lab</span>
        </Link>
      </h1>
      <div className={styles.Search}>
        <select onChange={selectHandler}>
          <option value="">All Categories</option>
          <option value="Abrsives">Abrsives</option>
          <option value="Appliances">Appliances</option>
          <option value="Bearings">Bearings</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Corporate Gifts">Corporate Gifts</option>
          <option value="Electrical">Electrical</option>
          <option value="Electronics & Robotics">Electronics & Robotics</option>
          <option value="Fastners">Fastners</option>
          <option value="Hand Tools">Hand Tools</option>
          <option value="Hardware">Hardware</option>
          <option value="Hydraulics">Hydraulics</option>
          <option value="IT & Electronics">IT & Electronics</option>
          <option value="Lab Supplies">Lab Supplies</option>
          <option value="Lubricants">Lubricants</option>
        </select>
        <input
          onChange={(e) => inputHandler(e)}
          type="text"
          placeholder="Search Products"
          value={search}
        />
      </div>
      <p>
        <Link to="/sign-in">Sign-in</Link>
      </p>
      <p>
        <Link to="/">Track Orders</Link>
      </p>
      <p>
        <Link to="/cart">
          Cart <span>{initialState.cart.length}</span>
        </Link>
      </p>
      <button onClick={() => setMode(!mode)}>{mode ? "Dark" : "Light"}</button>
    </div>
  );
}
