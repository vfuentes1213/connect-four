import React from 'react';

const modal = (props) =>
    (<div className = 'Modal'>
      <header className='Modal__header'>{props.message}</header>
      <div className="Modal__button-box">{props.children}</div>
      </div>);

export default modal;
