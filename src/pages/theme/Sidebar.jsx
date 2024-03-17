import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-green-50 ">
      <ul className="space-y-2 font-medium">
        <li>
          <Link to="/user-management">
            <button className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-200 group">
              User Management
            </button>
          </Link>
        </li>
        <li>
          <Link to="/faq">
          <button className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-200 w-full">FAQ</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
          <button className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-200 w-full">Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
