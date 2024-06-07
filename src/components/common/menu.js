import React from 'react';
import { MENU } from '../../data.ts';

function Menu({isMenuOpen, setIsMenuOpen}) {
  return (
    <section
      className={`menu fixed top-0 left-0 w-full h-full overflow-hidden invisible flex items-center justify-center ${isMenuOpen ? "menu-visible" : "menu-hidden"}`}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center overflow-y-auto flex flex-none justify-center items-center max-h-screen">
          <ul
            className="list-none py-4 px-0 m-0 block max-h-screen"
            role="menu"
          >
            {MENU.map((menu) => (
              <li
                className="p-0 m-6 text-2xl block text-gradient-transition"
                key={menu.name}
                role="menuitem"
              >
                <a
                  className="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                  href={`#${menu.ref}`}
                  onClick={setIsMenuOpen.bind(null, false)}
                >
                  {menu.name}
                </a>
              </li>
            ))}

            <li className='text-gradient-transition'>
              <a
                  className="link relative inline font-bold text-5xl duration-300 hover:no-underline"
                  href={`javascript:void(0)`}
                  onClick={setIsMenuOpen.bind(null, false)}
                  >
                    x
                </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Menu;
