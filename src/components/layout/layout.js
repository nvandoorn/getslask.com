import React from 'react'
import FA from 'react-fontawesome'

import { layout, btnBox, btn, red, iconMargin } from './layout.css'
import { centerText } from '../../globals.css'

import Logo from '../logo/logo'
import { RectButton as Button } from '../button/button'
import Demo from '../demo/demo'
import Footer from '../footer/footer'

const styledButton = (text, href, iconName) =>
  <Button href={href} className={btn}>{text}<FA name={iconName} className={iconMargin} /></Button>

const Layout = p =>
  <div className={layout}>
    <div className={layout}>
      <Logo tagline='Untangle your team' name='slask' />
      <div className={btnBox}>
        {styledButton('Download', '//www.npmjs.com/package/slask', 'download')}
        {styledButton('Code', '//github.com/nvandoorn/slask', 'github')}
      </div>
    </div>
    <p className={centerText}>slask is a lightweight log viewer and server all in one.</p>
    <Demo />
    <Footer>
      Made with <FA name='heart' className={red} /> by nvandoorn
    </Footer>
  </div>

export default Layout
