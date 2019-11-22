import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestBannerData, requestCategoriesData } from './actions';
import Home from '../../components/home';

class HomeContainer extends React.Component {
    componentDidMount(){
      this.props.requestBannerData();
      this.props.requestCategoriesData();
    }

  
    render(){
      const { banners, categories } = this.props;
      return (
      <Home banners={banners} categories={categories}/>
      );
    }
}

const mapStateToProps = state => ({ banners: state.home.banners, categories: state.home.categories });

const mapDispatchToProps = dispatch => bindActionCreators({requestBannerData, requestCategoriesData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);