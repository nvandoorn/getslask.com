import React from 'react'

import { round, rect } from './button.css'

const button = className => p => <a href={p.href} className={[className, p.className].join(' ')}>{p.children}</a>

export const RectButton = button(rect)

export const RoundButton = button(round)
