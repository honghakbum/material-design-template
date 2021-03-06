import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import {title, headerColor} from '../headerSetting/headerSetting';
import ListCards from '../../../components/ListCards/ListCards';

const headerTitle = [
  'MATERIAL',
  'DESIGN',
  'UI',
  'TEMPLATE',
]

class Ui extends Component {
    render() {
        return(
          <div>
            <Header headerTitle={headerTitle[2]} title={title} headerColor={headerColor[0]}/>
            <ListCards />
          </div>
        );
    }
}
export default Ui;