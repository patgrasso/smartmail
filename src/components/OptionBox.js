/**
 * OptionBox React component. Renders and keeps track of options and labels.
 *
 * @module OptionBox
 * @requires options
 */
/*global React*/

import options from '../options';


/**
 * OptionBox React class. Keeps track of and renders options and labels.
 *
 * @class OptionBox
 */
export default React.createClass({
  /**
   * Retrieves options and labels from their respective modules. Executes once
   * before the component is rendered.
   *
   * @event getInitialState
   * @return {Object} State to be used by the component
   */
  getInitialState: function () {
    return {
      options: options
    };
  },


  /**
   * Subscribes to changes in the options. Executes once after the component has
   * been mounted.
   *
   * @event componentDidMount
   */
  componentDidMount: function () {
    var that = this;

    globital.optionSubNum = options.subscribe(function () {
      that.setState({options: options});
    });
  },


  /**
   * Handles the event where an option is either checked or unchecked. Sets the
   * active attribute on the target option and triggers a state change on the
   * component.
   *
   * @event handleOptionChanged
   * @param {Number} i Index of option
   * @param {Event} e DOM event
   */
  handleOptionChanged: function (i, e) {
    options[i].active = e.target.checked;
    this.setState({options: options});
  },


  /**
   * Renders the component as two separate lists, one for options and one for
   * labels.
   *
   * @event render
   */
  render: function () {
    var that = this,
      optionNodes = this.state.options.map(function (option, i) {
        return (
          <li key={option.key} className="optionItem">
            <input
              type="checkbox"
              value={option.key}
              checked={option.active}
              onChange={that.handleOptionChanged.bind(that, i)}
            />
            <span>{option.display}</span>
          </li>
        );
      });

    return (
      <section className="optionBox">
        <div className="optionSection">
          <h2>Options</h2>
          <ul>{optionNodes}</ul>
        </div>
        <div className="optionSection">
          <h2>Labels</h2>
          <ul></ul>
        </div>
      </section>
    );
  }
});
