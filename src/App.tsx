// Icons
import { FaBars } from "react-icons/fa";
import { Home } from "./components/Home";
import { Aboutme } from "./components/Aboutme";
import { Logos } from "./components/Logos";
import { Newspapers } from "./components/Newspapers";
import { Webs } from "./components/Webs";
import { Mobiles } from "./components/Mobiles";
import { Posters } from "./components/Posters";
import { Lanyards } from "./components/Lanyard";
import { Uniforms } from "./components/Uniforms";

function App() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full bg-[#2D2D2D] text-white sticky top-0 z-50">
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <FaBars className="text-[1.3rem]" />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2"></div>
          <div className="hidden flex-none md:block">
            <ul className="menu menu-horizontal mr-8">
              {/* Navbar menu content here */}
              <li className="mr-1">
                <span>HOME</span>
              </li>
              <li className="mr-1">
                <span>ABOUT ME</span>
              </li>
              <li className="mr-1">
                <span>MY PROJECT</span>
              </li>
              <li className="mr-1">
                <span>SKILLS</span>
              </li>
              <li className="mr-1">
                <span>CONTACT</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Home />
        <Aboutme />
        <Logos />
        <Newspapers />
        <Webs />
        <Mobiles />
        <Posters />
        <Lanyards />
        <Uniforms />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <span>HOME</span>
          </li>
          <li>
            <span>ABOUT ME</span>
          </li>
          <li>
            <span>MY PROJECT</span>
          </li>
          <li>
            <span>SKILLS</span>
          </li>
          <li>
            <span>CONTACT</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
