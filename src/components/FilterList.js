/**
 * Provides a searchable list React component. Items in the list are independent
 * of type, so long as they are themselves React components.
 *
 * @module FilterList
 */
/*global React*/


/**
 * The FilterList React class displays a list of items, which is filterable.
 *
 * @class FilterList
 */
export default React.createClass({
  /**
   * Executes whenever the text in the filter input is changed.
   *
   * @event handleSearchChange
   * @param {Event} e DOM event
   */
  handleSearchChange: function (e) {
    this.setState({searchFilter: e.target.value});
    console.log(this.state.itemNodes);
  },


  /**
   * Converts ordinary objects to React components and offers this list, along
   * with a blank `searchFilter` string, as the intial state for the component.
   * Executes once before the component is rendered.
   *
   * @event getInitialState
   * @return {Object} State to be used by the component
   */
  getInitialState: function () {
    return {
      searchFilter: '',
      items: this.props.items.map(function (item, i) {
        // TODO: items need to be React components -- end goal: make these items filterable
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
      reactNode;

    this.state.itemNodes = this.state.items.map(function (item, i) {
      reactNode = React.createElement(that.props.itemClass, item);
      return (
        <li key={i} className="filterListItem">
          {reactNode}
        </li>
      );
    });
    return (
      <section>
        <input
          className="filterListSearch"
          type="text"
          placeholder="Search..."
          value={this.state.searchFilter}
          onChange={this.handleSearchChange}
        />
        <ul>{this.state.itemNodes}</ul>
      </section>
    );
  }
});
