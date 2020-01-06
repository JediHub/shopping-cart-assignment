import React from 'react';
import PropTypes from 'prop-types';

const headingVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const Heading = ({ children, id, component, variant, ...props }) => {
    let componentVariant = headingVariants.indexOf(variant) !== -1 ? variant : 'h1';
    const Component = component || componentVariant;
    return (
        <Component id={id} {...props}>
            {children}
        </Component>
    )
}

Heading.defaultProps = {
    component: null,
    children: null,
    variant: 'h1',
    id: '',
};

Heading.propTypes = {
    component: PropTypes.elementType,
    children: PropTypes.node,
    variant: PropTypes.oneOf(headingVariants),
};

export default Heading;