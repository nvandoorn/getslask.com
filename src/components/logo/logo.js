import React from 'react';

import { logo } from './logo.css'

const Logo = p =>
  <div className={logo}>
    {p.children}
  </div>

export default Logo
