function Header() {
    return (
    <header className="w-full fixed top-0 py-8 select-none z-40 bg-gradient-to-b from-slate-950 to-transparent">
        <div className="flex justify-between section-container">
        <a href="#home" className="link">
            <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👨‍💻</text></svg>" width={25} height={25} />
        </a>
        </div>
        <nav>
          <button className="hamburger w-6 h-6 flex items-center justify-center link relative">
          </button>
        </nav>
    </header>
    );
    
}

export default Header;