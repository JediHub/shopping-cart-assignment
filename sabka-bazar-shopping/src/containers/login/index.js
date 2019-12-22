import Login from '../../components/login/loginForm';
import { connect } from "react-redux";

const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });

export default connect(mapStateToProps, {})(Login);