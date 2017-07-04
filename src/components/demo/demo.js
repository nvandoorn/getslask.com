import React from 'react'
import FA from 'react-fontawesome'

import { RoundButton as Button } from '../button/button'

import { demo, screenshot, btn } from './demo.css'
import screenshotImg from './screenshot.png'

const Demo = p =>
  <div className={demo}>
    <img src={screenshotImg} className={screenshot} alt='slask screenshot' />
    <Button className={btn} href='//slaskdemo.herokuapp.com'>
      <FA name='play' />
    </Button>
  </div>

export default Demo
