import React from 'react'
import './itemDetails.css'
import { Link } from "react-router-dom";
export default function ItemDetails(props) {
    return (
        <div className={'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row"
                style={{display:'flex',flexDirection:'row-reverse'}}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{props.notLink ? props.topLine :
                            <Link to={{
                              pathname: '/lookSinger',
                              state: {
                                  singer: props.topLine
                              }
                              }}>{props.topLine}</Link>}
                            </div>
                            <h1 className='heading'>{props.heading}</h1>
                            <p className='home__hero-subtitle'>
                            {props.subTitle}
                            </p>
                        </div>
                    </div>
                    <div className="home__hero-img-wrapper">
                        <img width="400px" src={props.image} alt="Artist"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
