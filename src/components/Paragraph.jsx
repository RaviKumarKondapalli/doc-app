import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Paragraph = ({ children, className = '', truncate = false, tooltip = '' }) => {
  return (
    <p
      title={tooltip || (truncate && typeof children === 'string' ? children : '')}
      className={clsx(
        'mb-5',
        truncate && 'truncate',
        className
      )}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  truncate: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default Paragraph;
