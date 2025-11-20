const menuItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'discover', label: 'Discover', icon: '🔍' },
  { id: 'friends', label: 'Friends', icon: '🤝' },
  { id: 'avatar', label: 'Avatar', icon: '🧍' },
  { id: 'messages', label: 'Messages', icon: '💬' },
];

const Sidebar = ({ isMobileOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span className="sidebar-title">Menu</span>
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          ✕
        </button>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button className="sidebar-item">
                <span className="icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
