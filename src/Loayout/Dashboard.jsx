import { NavLink, Outlet } from "react-router-dom";

import { AiOutlineShopping } from "react-icons/ai";
import { BiCalendar, BiHomeAlt, BiSolidWallet } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { CgMenuCake } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full  text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/home">
              <BiHomeAlt /> User Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/reservaions">
              <BiCalendar /> Reservaions
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/history">
              <BiSolidWallet /> Payment History
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/mycart">
              <BsCart4 /> My Cart
              <span className="badge badge-secondary">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <BiHomeAlt /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              <CgMenuCake /> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <AiOutlineShopping /> Order Food
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/contact">
              <HiOutlineMail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
