import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { navigate } from '../actions/app.js';
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { SharedStyles, GlobalStyles, Page, BugNotice, ActionButton } from './shared-styles.js';

class NoticePage extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _page: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      GlobalStyles,
      Page,
      BugNotice,
      ActionButton,
      css`
        h2 {
					color: red;
        }
      `
    ];
  }

  render() {
    return html`
			<div id="wrapper" class="wrapper">
				<div class="page page--bug-notice" id="pageMain">
          <div class="notice">
          <h1 class="notice__title">Important</h1>
          <p class="notice__text">
            We have a bug. On your first connection of speaker module, your phone will redial your last caller.
          </p>
          <img class="notice__picture" src="src/components/images/android-bug-pic.png" alt="Android Bug Pic">
          <p class="notice__text">
            To ensure this only happens once go to <strong>settings -> connections -> bluetooth</strong>, then select
            Moduware Speaker and <strong>switch off "call audio"</strong>
          </p>
          <button class="button-connect action-button action-button--red" id="buttonConnectSpeaker" @click="${this.connectButtonClickHandler}">Connect</button>
          </div>
				</div>
			</div>
    `;
  }

  connectButtonClickHandler() {
    console.log('connect button click handeler clicked!');
    store.dispatch(navigate("/home-page"));
  }

  stateChanged(state) {
    this._page = state.app.page;
  }
}

window.customElements.define('notice-page', NoticePage);