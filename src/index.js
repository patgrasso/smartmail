/**
 * Entry point for the front-end. Loads React components and renders them on
 * the DOM.
 *
 * @module index
 * @requires OptionBox, SearchableEmailList, EmailItem
 */
/*global ReactDOM*/

import OptionBox from './components/OptionBox';
import SearchableEmailList from './components/SearchableEmailList';
import labels from './labels';


var emails = [
  {id: 1, subject: 'Hey you!', body: 'This is a special offer'},
  {id: 2, subject: 'Look at this', body: 'You\'re an awesome person'}
];


// Render the top-level components
ReactDOM.render(
  <div>
    <OptionBox />
    <SearchableEmailList emails={emails} />
  </div>,
  document.getElementById('content')
);
