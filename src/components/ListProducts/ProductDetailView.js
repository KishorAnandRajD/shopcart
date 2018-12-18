import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import ProductListValues from '../../stub/ProductList';
import { ProductDescription } from './ProductDescription';
import { connect } from 'react-redux';
//import {fetchProducts} from '../../actions/ProductList';
import Header from '../common/Header'
import Footer from '../common/Footer'

class ProductDetailView extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Scroll to top of page as cursor was at the bottom in previous page
      }
    render() {
        const { id } = this.props.match.params;
        console.log("id:", id);
        console.log("this.props.productList:", this.props.productsList);
        let product = this.props.productsList.filter((val) => {
            return val.product_id === id;
        }

        ).map((val) => {
            return <div key={val.product_id}><ProductDescription key={val.product_id} productVal={val} /></div>;
        })

        return (
            <div className="container">                    
                <Header />
                <Link to="/" className="badge badge-primary" > Back To Product Listing Page </Link>
                {product}                    
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { productsList: state.productsList };
}

export default connect(mapStateToProps, null)(ProductDetailView);
