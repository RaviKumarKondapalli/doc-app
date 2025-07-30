import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Heading = ({ level = 1, children, className = '', tooltip = '', border = false }) => {
  debugger
  const Tag = `h${level}`;

  //const baseStyle = 'font-semibold';
  const baseStyle = 'font-bold ';
  const levelStyles = {
    1: 'text-4xl mb-5',
    2: 'text-2xl pt-5 mb-5',
    3: 'text-xl mb-2',
    4: 'text-lg',
    5: 'text-base',
    6: 'text-sm',
  };

  const borderStyles = border ? 'border-b border-gray-300 dark:border-gray-800 pb-1' : '';

  return (
    <Tag
      title={tooltip || (typeof children === 'string' ? children : '')}
      className={clsx(baseStyle, levelStyles[level], 'truncate', borderStyles, className)}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tooltip: PropTypes.string,
  border: PropTypes.bool,
};

export default Heading;