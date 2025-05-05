import { useRef } from "react";
import { FaBars } from "react-icons/fa";

// Components
import { Home } from "./components/Home";
import { Aboutme } from "./components/Aboutme";
import { Logos } from "./components/Logos";
import { Newspapers } from "./components/Newspapers";
import { Webs } from "./components/Webs";
import { Mobiles } from "./components/Mobiles";
import { Posters } from "./components/Posters";
import { Lanyards } from "./components/Lanyard";
import { Uniforms } from "./components/Uniforms";
import { Skills } from "./components/Skills";
import { Contacts } from "./components/Contacts";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const myProjectRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

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
                <span
                  onClick={() => {
                    homeRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  HOME
                </span>
              </li>
              <li className="mr-1">
                <span
                  onClick={() => {
                    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  ABOUT ME
                </span>
              </li>
              <li className="mr-1">
                <span
                  onClick={() => {
                    myProjectRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  MY PROJECT
                </span>
              </li>
              <li className="mr-1">
                <span
                  onClick={() => {
                    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  SKILLS
                </span>
              </li>
              <li className="mr-1">
                <span
                  onClick={() => {
                    contactRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  CONTACT
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutMeRef}>
          <Aboutme />
        </div>
        <div ref={myProjectRef}>
          <Logos />
        </div>
        <div>
          <Newspapers />
        </div>
        <div>
          <Webs />
        </div>
        <div>
          <Mobiles />
        </div>
        <div>
          <Posters />
        </div>
        <div>
          <Lanyards />
        </div>
        <div>
          <Uniforms />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contacts />
        </div>
        <div className="h-[6rem] bg-[#2D2D2D] flex items-center justify-center">
          <img src="/assets/footer_logo.png" />
        </div>
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
