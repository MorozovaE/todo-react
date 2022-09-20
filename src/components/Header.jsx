import React from 'react';
import './Header.css';

export default function Header() {
  let now = new Date().toLocaleDateString();

  return (
    <header>
        <div className="current-date">{now}</div>
    </header>
  )
}
