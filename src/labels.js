/**
 * Manages state for labels. Communicates with server to keep an up-to-date list
 * of labels and which are currently active for the user. Uses an `OptionArray`
 * to keep track of this state.
 *
 * @module labels
 * @requires options
 */

import {OptionArray} from './options';


/**
 * Exported state for labels
 *
 * @property labels
 * @type OptionArray
 */
var labels = new OptionArray();


// FIXME: For debugging
labels.push({a: 1});
globital.labels = labels;
console.log(labels);

export default labels;
