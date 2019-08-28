import React from 'react';

const modal = (props) => (
  <div
    className='Modal'
    style={{
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
