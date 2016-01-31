/**
 * Provides the Email React component, which represents a single email.
 *
 * @module Email
 */
/*global React*/


/**
 * The Email React class represents a single email
 * TODO: Implement & document
 *
 * @class Email
 */
export default React.createClass({
  render: function () {
    return (
      <li>
        <h3>{this.props.subject}</h3>
        <p>{this.props.body}</p>
      </li>
    );
  }
});
