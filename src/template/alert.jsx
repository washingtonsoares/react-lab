import React from 'react'

export default props => (
  <div className={'alert text-center alert-' + props.type} role='alert'>
    <span className='glyphicon glyphicon-exclamation-sign' aria-hidden='true' />
    {props.message}
  </div>
)
