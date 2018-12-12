import React from 'react';
import '../../style/nav.css';
import { getCate } from '../../actions/itemsAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class Navs extends React.Component {
  state = {
    btn: '',
    nav: 'close-nav'
  }

  componentDidMount() {
    this.props.getCate()
  }

  showNav() {
    if(!this.state.nav) {
      this.setState({
        btn: '',
        nav: 'close-nav'
      })
    }
    else this.setState({
      btn: 'close-nav',
      nav: ''
    })
  }

  render() {
    const cate = this.props.book.cate;
    console.log(cate);
    return (
        <nav className="nav-bar">
          <div className={`menu-btn ${this.state.btn}`} onClick={this.showNav.bind(this)}>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
          </div>
          <div className={`nav-content ${this.state.nav}`}>
            <div className={`category ${this.state.nav}`} >
              <h2>CATEGORIES</h2>
              <ul>
                {
                  cate.map(({_id, name}) => (
                    <li>
                      <a href={`/search/category/${name}`}>{name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={`price ${this.state.nav}`}>
              <h2>PRICES</h2>
              <div className="price-bar">
                <div className="bar">
                  <div className="circle-price circle-price-1"></div>
                  <div className="circle-price circle-price-2"></div>
                </div>
              </div>
              <ul>
                <li>
                  <a href={`/search/price/00-10`}>0$ - 10$</a>
                </li>
                <li>
                  <a href={`/search/price/10-20`}>10$ - 20$</a>
                </li>
                <li>
                  <a href={`/search/price/20-30`}>20$ - 30$</a>
                </li>
              </ul>
            </div>
          </div>

        </nav>
    );
  }
}

Navs.propTypes = {
  getCate: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  book: state.book
})

export default connect(mapStateToProps, { getCate })(Navs);
