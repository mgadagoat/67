import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import GameCarousel from './components/GameCarousel.jsx';

const mockSections = [
  {
    id: 'recommended',
    title: 'Recommended For You',
    games: [
      {
        id: 1,
        title: 'Obby Runner',
        creator: 'StudioX',
        players: '12.3K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Obby+Runner',
      },
      {
        id: 2,
        title: 'Galaxy Tycoon',
        creator: 'Nebula Labs',
        players: '8.4K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Galaxy+Tycoon',
      },
      {
        id: 3,
        title: 'Dragon Quest',
        creator: 'MythicForge',
        players: '15.9K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Dragon+Quest',
      },
      {
        id: 4,
        title: 'City Life RP',
        creator: 'UrbanWorks',
        players: '22.1K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=City+Life+RP',
      },
      {
        id: 5,
        title: 'Speed Legends',
        creator: 'Nitro Games',
        players: '11.2K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Speed+Legends',
      },
    ],
  },
  {
    id: 'popular',
    title: 'Popular',
    games: [
      {
        id: 6,
        title: 'Tower Battles',
        creator: 'Blocksmiths',
        players: '30.4K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Tower+Battles',
      },
      {
        id: 7,
        title: 'Island Survival',
        creator: 'Palm Studio',
        players: '18.7K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Island+Survival',
      },
      {
        id: 8,
        title: 'Paintball Arena',
        creator: 'ColorCore',
        players: '9.9K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Paintball+Arena',
      },
      {
        id: 9,
        title: 'Mystery Mansion',
        creator: 'Enigma Studios',
        players: '14.0K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Mystery+Mansion',
      },
      {
        id: 10,
        title: 'Space Race',
        creator: 'Orbit Labs',
        players: '6.2K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Space+Race',
      },
    ],
  },
  {
    id: 'top-rated',
    title: 'Top Rated',
    games: [
      {
        id: 11,
        title: 'Crystal Caverns',
        creator: 'Shine Studio',
        players: '7.5K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Crystal+Caverns',
      },
      {
        id: 12,
        title: 'Sky Pirates',
        creator: 'CloudNine',
        players: '5.3K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Sky+Pirates',
      },
      {
        id: 13,
        title: 'Farm Frenzy',
        creator: 'MeadowWorks',
        players: '3.9K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Farm+Frenzy',
      },
      {
        id: 14,
        title: 'Dungeon Escape',
        creator: 'Torchlight Games',
        players: '4.7K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Dungeon+Escape',
      },
      {
        id: 15,
        title: 'Neon Riders',
        creator: 'Glide Studio',
        players: '9.1K players',
        thumbnail: 'https://via.placeholder.com/300x180?text=Neon+Riders',
      },
    ],
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = useMemo(() => mockSections, []);

  const handleToggleMenu = () => setIsMobileMenuOpen((open) => !open);
  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="app">
      <Navbar onToggleMenu={handleToggleMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <div className="layout">
        <Sidebar isMobileOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
        <main className="main-content" onClick={handleCloseMenu}>
          {sections.map((section) => (
            <GameCarousel key={section.id} title={section.title} games={section.games} />
          ))}
        </main>
      </div>
      {isMobileMenuOpen && <div className="backdrop" onClick={handleCloseMenu} />}
    </div>
  );
}

export default App;
