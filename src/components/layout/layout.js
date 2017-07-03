import React from 'react'
import FA from 'react-fontawesome'

import { layout, btnBox, btn, screenshot, red } from './layout.css'

import screenshotImg from '../screenshot/screenshot.png'
import Logo from '../logo/logo'
import Button from '../button/button'
import Footer from '../footer/footer'

const Layout = p =>
  <div className={layout}>
    <div className={layout}>
      <Logo>slask</Logo>
      <h2>Connect your team</h2>
      <div className={btnBox}>
        <Button className={btn}>Download <FA name='download' /></Button>
        <Button href='//github.com/nvandoorn/slask' className={btn}>Source Code <FA name='github' /></Button>
      </div>
    </div>
    <img src={screenshotImg} className={screenshot} alt='slask screenshot' />
    <Footer>
      Made with <FA name='heart' className={red} /> by nvandoorn
    </Footer>
  </div>

export default Layout
