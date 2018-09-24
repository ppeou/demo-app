import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@ppeou/my-component/p1-container';
import '@ppeou/my-component/p1-layout';
import '@ppeou/my-component/p1-media-object';
import '@ppeou/my-component/p1-slider';

/**
 * @customElement
 * @polymer
 */
class DemoApp extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="/css/font-awesome.css">
      <style>
        :host {
          display: block;
        }
        h1 {margin: 0; display: inline-block; padding-left: 1rem;}
        .aside {padding: 0.75rem;}
        @media screen and (min-width: 1087px) {
          .is-mobile {display: none !important;}
        }
        .nav {list-style: none; padding: 0; margin: 0;}
        .nav.is-row {margin: 1.25rem 1rem 0;}
        .nav.is-row li {display: inline-block;}
        .nav.is-aside li {padding: 0.5rem 1rem; font-size: 1.4rem;}
        .nav li a .fa {margin-right: 0.75rem;}
        a, a:visited, a:active, a:focus, a:hover {color: #4a4a4a; text-decoration: none;}
        
        .logo {padding: 0.5rem 0; text-align: center; font-size: 2rem;}
        p1-media-object {
          display: inline-block;
          width: 25%;
          border: solid 1px #ccc;
        }
        @media screen and (max-width: 1087px) {
        p1-media-object {width: 100%;}
        }
        .content-main {
          padding: 0.75rem;          
          box-sizing: border-box;
          overflow: hidden;
        }
      </style>
      <p1-layout id="p1Layout">
        <div slot="aside-item" class="aside">        
          <div class="logo"><i class="fas fa-home"></i> Demo App</div>
          <hr />
          <ul class="nav is-aside">
            <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
            <li><a href="#"><i class="fa fa-database"></i> Dashboard</a></li>
            <li><a href="#"><i class="fa fa-user"></i> User Account</a></li>
          </ul>
          
          <button class="is-mobile" on-click="_toggleSideBar">Toggle Nav</button>
        </div>
        <div slot="nav-top">
          <h1>Home</h1>
        </div>
        <div slot="content-main" class="content-main">
          <div>
            <h1>Main Content</h1>
            <div>
              <h3>Slider Value: [[mySliderValue]]</h3>
              <p1-slider value="{{mySliderValue}}"></p1-slider>
            </div>
            <br/><hr />
            <div>
            <h3>Media object</h3>
            <p1-media-object img-size="128"
                     img-src="/img/128x128.png"
                     img-align="center"
                     text-align="left">
                <strong>Media Object</strong>
                <small>Image Default/Left</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p1-media-object>
            <p1-media-object img-pos="right"
                             img-size="128"
                             img-src="/img/128x128.png"
                             img-align="end"
                             text-align="right">
                <strong>Media Object</strong>
                <small>Image Right</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p1-media-object>
            <p1-media-object img-pos="top"
                             img-size="128"
                             img-src="/img/128x128.png"
                             img-align="center"
                             text-align="start">
                <strong>Media Object</strong>
                <small>Image Top</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p1-media-object>
            <p1-media-object img-pos="bottom"
                             img-size="64"
                             img-src="/img/128x128.png"
                             img-align="end"
                             text-align="left">
                <strong>Media Object</strong>
                <small>Image Bottom</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p1-media-object>
            </div>
          </div>
        </div>
        <div slot="nav-bottom">
          <ul class="nav is-row">
            <li><a href="#">&copy;2018</a></li>            
            <li class="is-mobile"><a href="#" on-click="_toggleSideBar">Toggle Nav</a></li>
          </ul>
        </div>
      </p1-layout>
    `;
  }

  _toggleSideBar() {
    this.$.p1Layout.isAsideOpen = !this.$.p1Layout.isAsideOpen;
  }

  static get properties() {
    return {
      mySliderValue: {type: Number, value: 0},
    };
  }
}

window.customElements.define('demo-app', DemoApp);
