/**
 * Provides a searchable list React component for Emails.
 *
 * @module SearchableEmailList
 * @requires Email
 */
/*global React*/

import Email from './Email';


/**
 * Tests an Email component to see if it's contents match the search query
 * by comparing the stringified contents of the Email's props to the filter
 * as a regular expression.
 *
 * @class testEmailWithFilter
 * @param {Email} emailNode The email to be checked
 * @param {String} regexQuery String containing a regular expression that should
 *    be used to test the email
 * @return {Boolean} True if the result of `regexQuery.test()` against the
 *    stringified props of the `emailNode` is true, false otherwise
 */
function testEmailWithFilter(emailNode, regexQuery) {
  return RegExp(regexQuery.toLowerCase()).test(
    JSON.stringify(emailNode.props).toLowerCase()
  );
}


/**
 * The SearchableEmailList React class displays a list of emails, which is
 * filterable.
 *
 * @class SearchableEmailList
 */
export default React.createClass({
  /**
   * Executes whenever the text in the query input is changed.
   *
   * @event handleQueryChange
   * @param {Event} e DOM event
   */
  handleQueryChange: function (e) {
    this.setState({searchQuery: e.target.value});
    this.forceUpdate();
  },


  /**
   * Converts JSON email objects to React components and offers this list, along
   * with a blank `searchQuery` string, as the intial state for the component.
   * Executes once before the component is rendered.
   *
   * @event getInitialState
   * @return {Object} State to be used by the component
   */
  getInitialState: function () {
    return {
      searchQuery: '',

      // replace props.emails with a url endpoint to pick these up at
      items: this.props.emails.map(function (email) {
        return <Email {...email} key={email.id} />;
      })
    };
  },


  /**
   * Renders the component as an input field followed by a list of the items.
   *
   * @event render
   */
  render: function () {
    var that = this,
      emailNodes = this.state.items.filter(function (email, i) {
        return testEmailWithFilter(email, that.state.searchQuery);
      });
    return (
      <section>
        <input
          className="emailListQuery"
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleQueryChange}
        />
        <ul>{emailNodes}</ul>
      </section>
    );
  }
});
