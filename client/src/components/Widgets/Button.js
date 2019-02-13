import React from 'react';

export const Button = props => {
  return (
    <button {...props}>
      <span className={`${props.styles}`}>{props.text}</span>
    </button>
  );
};

// we'll probably want to move more in this direction for the little input/control type widgets
// Note that this is just a sample or proposal to make it easier to collect all the button styles in one place
export const B = props => {
  const { className, children, btnType, ...other } = props
  let classes
  // if we get a 'type' prop, use that to determine which styles to apply
  // otherwise, if we pass in className use that
  // otherwise, use the default styles
  switch (btnType) {
    case 'primary':
      classes = 'outline-none ml-0'
      break;
    case 'secondary':
      classes = 'outline-none ml-0'
      break;
    case 'nav':
      classes = 'outline-none ml-0'
      break;
    default:
      classes = className
  }

  if (props.disabled) {
    classes += ' cursor-not-allowed opacity-50'
  }

  return (
    <button className={classes} {...other}>
      {children}
    </button>
  )
}