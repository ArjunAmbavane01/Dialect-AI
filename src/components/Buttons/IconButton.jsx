import React from 'react';

const IconButton = ({Icon, onCLick}) => {
    <span className='cursor-pointer flex items-center space-x-2' onClick={onCLick}>
        <Icon size={22} />
    </span>
}

export default IconButton;