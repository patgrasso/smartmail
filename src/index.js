/**
 * Entry point for the front-end. Loads React components and renders them on
 * the DOM.
 *
 * @module index
 * @requires OptionBox, FilterList, EmailItem
 */
/*global ReactDOM*/

import OptionBox from './components/OptionBox';
import FilterList from './components/FilterList';
import EmailItem from './components/EmailItem';
import labels from './labels';


var emails = [
  {subject: 'Hey you!', body: 'This is a special offer'},
  {subject: 'Look at this', body: 'You\'re an awesome person'}
];


// Render the top-level components
ReactDOM.render(
  <div>
    <OptionBox />
    <FilterList items={emails} itemClass={EmailItem} />
  </div>,
  document.getElementById('content')
);
