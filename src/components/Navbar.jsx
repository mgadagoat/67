const Navbar = ({ onToggleMenu, isMobileMenuOpen }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={onToggleMenu} aria-label="Toggle menu">
          <span className={isMobileMenuOpen ? 'hamburger-line open' : 'hamburger-line'} />
          <span className={isMobileMenuOpen ? 'hamburger-line open' : 'hamburger-line'} />
          <span className={isMobileMenuOpen ? 'hamburger-line open' : 'hamburger-line'} />
        </button>
        <div className="logo">BloxWorld</div>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search games, experiences..." />
      </div>
      <div className="navbar-right">
        <div className="navbar-icon">🔔</div>
        <div className="navbar-icon">⚙️</div>
        <div className="navbar-profile">
          <div className="avatar" aria-hidden="true" />
          <span className="username">Player123</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
