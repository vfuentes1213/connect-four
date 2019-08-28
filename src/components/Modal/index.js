import React from 'react';

const modal = (props) => (
  <div
    className='Modal'
    style={{
      // transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      // opacity: props.show ? '1' : '0'
      display: props.show ? '' : 'none'
    }}
  >
    <div className='Modal__backdrop' />
    <div className='Modal__content'>
      <header className='Modal__header'>{props.message}</header>
      <div className='Modal__button-box'>{props.children}</div>
    </div>
  </div>
);

export default modal;
