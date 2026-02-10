import { useState } from 'react';
import type { NavItem } from '../../types';
import { useNavbarVisibility } from '../../hooks';
import './Navigation.css';

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { isVisible, isAtTop } = useNavbarVisibility();

  const handleClick = (item: NavItem) => {
    setActiveItem(item.id);
    if (!item.isExternal) {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`navigation ${isAtTop ? 'at-top' : 'scrolled'}`}
    >
      <div className="nav-pill">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={(e) => {
              if (!item.isExternal) {
                e.preventDefault();
                handleClick(item);
              }
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
