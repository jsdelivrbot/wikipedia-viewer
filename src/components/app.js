import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import { bindActionCreators } from 'redux'
import { fetchWiki } from '../actions/WikiActions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { searchTerm: '' }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.displayInput = this.displayInput.bind(this)
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <form onSubmit={this.onSearchSubmit} onSubmit={this.onSearchSubmit}>
              <input
                className="wiki-input"
                placeholder="Search on Wikipedia..."
                value={this.state.searchTerm}
                onChange={this.onInputChange}
              />
            </form>
            <a onClick={this.displayInput} className="center-xs-text magnifying-icon"><i className="fa fa-search fa-3x" aria-hidden="true"></i></a>
          </div>
          <ul>{this.props.wikipedia.map(this.renderWikiUnit)}</ul>
        </div>
      </div>
    )
  }

  renderWikiUnit(page) {
    return (
      <li key={page.title}>
        <a>
          <div>
            <h3>{page.title}</h3>
          </div>
        </a>
      </li>
    )
  }

  onSearchSubmit(event) {
    event.preventDefault()

    if (this.state.searchTerm) {
      this.props.fetchWiki(this.state.searchTerm)
      this.setState({ searchTerm: '' })
    }

    $('form').fadeOut(100)
    $('a').fadeOut(100)
    $('ul').fadeOut(1).fadeIn(1000)
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  displayInput(event) {
    $('input').fadeIn(300)
    $('a').fadeOut(1)
  }
}

const mapStateToProps = ({wikipedia}) => {
  return { wikipedia }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWiki }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)