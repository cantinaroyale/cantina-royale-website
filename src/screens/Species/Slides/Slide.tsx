import React from 'react'
import Frame from '../../../components/Frame'

interface Props{
    globe: string;
    avatar: string;
    text: string;
}

function Slide({globe, avatar, text}: Props) {
    return (
        <Frame>
        <div className='species-slider-element'>
            <section className='species-slider-element-globe'>
            <img src = {globe} alt = 'globe'  />
            <aside />
            </section>

            <img src={avatar} className='species-slider-element-avatar' alt = 'avatar' />
            <figure className='species-slider-element-text'>
                <section className='species-slider-element-text-overlay'></section>
                <p>{text}</p>
            </figure>
        </div>
    </Frame>
    )
}

export default Slide
