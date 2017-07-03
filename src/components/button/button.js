import React from 'react'

import { base } from './button.css'

const Button = p => <a href={p.href} className={[base, p.className].join(' ')}>{p.children}</a>

export default Button
