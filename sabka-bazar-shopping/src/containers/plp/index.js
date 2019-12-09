import React, { useEffect, useState } from "react";
import Plp from '../../components/plp';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestProductsData } from "./actions";

function PlpContainer(props) {
    const { products, categories } = props;
    const [displayProp, setDisplayProp] = useState('');

    let cid = props.match.params.cid;

    function showMenu() {
        if (displayProp === "block") {
            setDisplayProp('none');
        } else {
            setDisplayProp('block');
        }
    }


    useEffect(() => {
        props.requestProductsData({ cid: cid, categories: categories });
    }, [cid]);


    return <Plp products={products} cid={cid} showMenu={showMenu} displayProp={displayProp} />;
}

const mapStateToProps = (state) => ({
    products: state.plp.products,
    categories: state.home.categories
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestProductsData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlpContainer);