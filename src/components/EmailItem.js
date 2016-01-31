/**
 * Provides the EmailItem React component, which represents a single email.
 *
 * @module EmailItem
 */
/*global React*/


/**
 * The EmailItem React class represents a single email
 * TODO: Implement & document
 *
 * @class EmailItem
 *  
 */
export default React.createClass({
  render: function () {
    return (
      <div>
        <h3>{this.props.subject}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
});
