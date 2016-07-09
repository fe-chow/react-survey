/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
if (process.env.BROWSER) {
  require('semantic-ui-css/components/container.css');

  require('semantic-ui-css/components/menu.css');

}

import React from 'react';
import cx from 'classnames';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';

import Navigation from '../Navigation';

import logoUrl from './logo-small.png';

const root = "ui fixed inverted menu";
const banner = "header item";
const container = "ui container";

function Header() {
  return (
    <div className={cx(root, s.root)}>
      <div className={container}>
        <Link className="header item" to="/">
          <img src={logoUrl} width="38" height="38" alt="logo"/>
          <span className={s.brandTxt}>Clouddata</span>
        </Link>

        <Navigation className={s.nav}/>

      </div>
      <div className={s.banner}>
        <h1 className={s.bannerTitle}>React</h1>
        <p className={s.bannerDesc}>Complex web apps made easy</p>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
