import React from 'react'
import './searchSong.css'
import { Fragment, useEffect, useState, useRef, createRef } from "react";
import { Link } from "react-router-dom";
  export default function SearchSong() {
    const [topSongs, setTopSongs] = useState([]);
    const inputEl = useRef(null);
    const fetchData = async () => {
        let sTrack = inputEl.value
        try {
          const response = await fetch(
            "http://ws.audioscrobbler.com/2.0/?method=track.search&track=Positions&api_key=a3c9fd095f275f4139c33345e78741ed&format=json"
          );
          const data = await response.json();
          setTopSongs(data);
        } catch (error) {
          console.log(error.message);
        }
      };
  
    return (
      <div>
        <div className="inner-input">
        <div className="container">
            <h1 className="search" ref={inputEl}>Search for song:
            </h1>
            <input size="50" type="text"/>
            <button class="btn btn-primary" onClick={fetchData} >Fetch</button>
        </div>
        </div>
        {topSongs?.results?.trackmatches?.track.length &&
          topSongs.results.trackmatches.track.map((datumn) => {
            return (
                <Fragment key={datumn.name}>
                <div className={'home__hero-section darkBg'}>
              <div className="container">
                  <div className="row home__hero-row"
                  style={{display:'flex',flexDirection:'row-reverse'}}
                  >
                      <div className="col">
                          <div className="home__hero-text-wrapper">
                              <div className="top-line"><Link to={{
                              pathname: '/lookSinger',
                              state: {
                                  singer: datumn.artist
                              }
                              }}>{datumn.artist}</Link></div>
                              <h1 className='heading'>{datumn.name}</h1>
                          </div>
                      </div>
                      <div className="home__hero-img-wrapper">
                          <img width="400px" src={datumn.image[1]["#text"]} alt="Track"/>
                      </div>
                  </div>
              </div>
          </div>
              </Fragment>
            );
          })}
      </div>
    )
  }