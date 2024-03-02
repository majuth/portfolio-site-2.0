import React, { useState } from "react";
import Menu from "../common/menu";
import hamburger from "../../img/burger-menu.svg"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <header className="w-full fixed top-0 py-8 select-none z-40 bg-gradient-to-b from-gray-900 to-transparent">
        <div className="flex justify-between section-container">
            <a href="#home" className="link">
                <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👨🏻‍💻</text></svg>" width={26} height={26} alt="Logo - Majuth"/>
            </a>
            <nav>
            <button 
                className={`w-6 h-6 flex items-center justify-center link relative`}
                onClick={setIsMenuOpen.bind(null, !isMenuOpen)}
            >
                {/* <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center">.</div> */}
                <img className={'items-center justify-center'} src={hamburger}></img>
            </button>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </nav>
        </div>
    </header>
    );
    
}

export default Header;