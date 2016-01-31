/**
 * Manages state for options, and provides the OptionArray class
 *
 * @module options
 * @requires PubSubArray
 */
/*global globital*/

import PubSubArray from './utils/PubSubArray';


/**
 * OptionArray is a PubSubArray that automatically adds an `active` attribute
 * to the item being added, as well as an `update(active)` function to set the
 * active state of the option.
 *
 * @class OptionArray
 * @extends PubSubArray
 * @constructor
 */
class OptionArray extends PubSubArray {

  /**
   * Pushes an item (or multiple items) onto the array after setting an `active`
   * attribute and defining an `update(active)` function on the item. Notifies
   * listeners of the addition.
   *
   * @method push
   * @param {Object...} arguments Accepts variable length arguments and adds
   *    each to the array
   * @return {Number} New length of the array
   */
  push() {
    var items = Array.prototype.slice.call(arguments).map(function (item) {
      item.active = item.active || false;
      item.update = function (active) {
        if (item.update instanceof Function) {
          item.update();
        }
        this.active = active;
      }.bind(item);
      return item;
    });
    return super.push(...items);
  }
}


/**
 * Exported state for options
 *
 * @property options
 * @type OptionArray
 */
var options = new OptionArray();


// FIXME: Temporary
options.push({
  key: 'newOption',
  display: 'New Option'
}, {
  key: 'testOption',
  display: 'Test Option'
});


// FIXME: Also temporary
globital.options = options;


export {OptionArray};
export default options;
