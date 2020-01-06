import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
    className,
    src,
    srcset,
    alt,
    sizes,
    ...other
}) => {
    return (
        <img
        className={className}
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        {...other}
        />
    );
};

Image.defaultProps = {
    srcset: '',
    sizes: '',
    className: ''
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    srcset: PropTypes.string,
    sizes: PropTypes.string,
}

export default Image;

