import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import '../../styles/bg.scss';
import {title, headerColor, headerTitle} from './headerSetting';

const cardsTitle = [
  'SLIDE',
  'TABMENU',
  'SWIPE',
]
const cardsImg = [
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1200341012869.579612ec24d7d.png',
  'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7dkRYelJkeklqWFU/materialdesign-principles-motion.png',
  'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BybB4JO78tNpRlY1eHJ4LTh4ZjQ/01-duration-and-easing.png'
]
const link = [
  '/tab/slide',
  '/tab/tabmenu',
  '/tab/swipe',
]
const titleColor = [
  {
    color : '#673AB7',
    fontWeight:'bold',
    textAlign:'center'
}]
class Tab extends Component {
    render() {
        return(
          <div>
            <Header headerTitle={headerTitle[1]} title={title} headerColor={headerColor[1]}/>
            <Cards title={cardsTitle[0]} cardsAlt={cardsTitle[0]} cardsImg={cardsImg[0]} link={link[0]} color={titleColor[0]}/>
            <Cards title={cardsTitle[1]} cardsAlt={cardsTitle[1]} cardsImg={cardsImg[1]} link={link[1]} color={titleColor[0]}/>
            <Cards title={cardsTitle[2]} cardsAlt={cardsTitle[2]} cardsImg={cardsImg[2]} link={link[2]} color={titleColor[0]}/>
          </div>
        );
    }
}
export default Tab;