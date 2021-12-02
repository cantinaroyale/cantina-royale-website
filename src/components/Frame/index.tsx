import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode;
    id?: string;
    className?: string;
}

function Frame({children, id='', className=''}: Props) {
    return (
        <div className={`frame ${className}`} id = {id}>
            <div className='frame-blur'></div>
            <div className='frame-inner'>
                <div className='frame-inner-content'>{children}</div>
            </div>
        </div>
    )
}

export default Frame