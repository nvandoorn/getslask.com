import React from 'react';

import { logo, logoText } from './logo.css'

const Logo = p =>
  <div className={logo}>
    <h1 className={logoText}>{p.name}</h1>
    <h2>{p.tagline}</h2>
  </div>

export default Logo
