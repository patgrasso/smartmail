/**
 * Provides an extended Array class which implements the publisher-subscriber
 * pattern.
 *
 * @module PubSubArray
 */


/**
 * Overridden Array class whose prototype is a true Array. This is used to work
 * around the fact that the built-in Array cannot be extended.
 *
 * @class Array
 * @extends []
 * @constructor
 */
function Array() {}
Array.prototype = [];


/**
 * PubSubArray is an extension of the standard Array which allows subscribers to
 * listen for changes in the array.
 *
 * A work-around is used to extend from the built-in Array, which creates some
 * complications. For instance,
 *
 *    var x = [1, 2, 3];
 *    x[5] = 'hello';
 *    console.log(x.length);  // 6
 *
 *    var y = new PubSubArray(1, 2, 3);
 *    y[5] = 'hello';
 *    console.log(y.length);  // 3
 *
 * @class PubSubArray
 * @extends Array
 * @constructor
 */
class PubSubArray extends Array {
  /**
   * Constructs the PubSubArray by defining a non-writable `listeners` property.
   *
   * @method constructor
   * @param {?...} arguments Accepts a variable number of arguments, all of
   *    which are pushed onto the list.
   */
  constructor() {
    super();

    Object.defineProperty(this, 'listeners', {
      value: []
    });

    if (
      arguments.length === 1 &&
      arguments[0] instanceof Number &&
      arguments[0] > 0
    ) {
      while (arguments[0]-- > 0) {
        this.push(undefined);
      }
    } else {
      this.push(...arguments);
    }
  }


  /**
   * Pushes the arguments provided to the list, as the standard Array would,
   * but then notifies all listeners of the addition.
   *
   * @method push
   * @param {?...} arguments Accepts a variable number of arguments to push onto
   *    the list
   * @return {Number} New length of the list
   */
  push() {
    super.push(...arguments);
    this.listeners.forEach(function (f) {
      (f instanceof Function) && f();
    });
    return this.length;
  }


  /**
   * Subscribes a function to be executed whenever an item is pushed onto the
   * list.
   *
   * @method subscribe
   * @param {Function} f A callable function
   * @return {Number} Subscription token, which can be used with `unsubscribe()`
   *    to remove this function from the listener list
   */
  subscribe(f) {
    if (f instanceof Function) {
      return this.listeners.push(f) - 1;
    }
    throw new TypeError('Subscribe expects a function');
  }


  /**
   * Unsubscribes the listener with the provided token.
   *
   * @method unsubscribe
   * @param {Number} i Token given to the subscriber as a result of calling
   *    `subscribe()`
   * @return {Function} Function that has been removed from the list of
   *    listeners
   */
  unsubscribe(i) {
    return this.listeners.splice(i, 1)[0];
  }
}


export default PubSubArray;
