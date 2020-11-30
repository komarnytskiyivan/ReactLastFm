import React from 'react'
import './searchSong.css'
import { Fragment, useEffect, useState, useRef, createRef } from "react";
import { Link } from "react-router-dom";
import SearchSongsList from '../../searchSongsList/searchSongsList'
  export default function SearchSong() {
    const [topSongs, setTopSongs] = useState([]);
    let inputEl = useRef(null);
    const fetchData = async () => {
      setTopSongs([]);
        let sTrack = inputEl.current.value;
        sTrack = sTrack.replace(/ /g,"+");
        try {
          const response = await fetch(
            `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${sTrack}&api_key=a3c9fd095f275f4139c33345e78741ed&format=json`
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
            <h1 className="search" >Search for song:
            </h1>
            <input ref={inputEl} size="50" type="text"/>
            <button className="btn btn-primary" onClick={fetchData} >Fetch</button>
        </div>
        </div>
        {topSongs != 0 ? <SearchSongsList songs={topSongs}/> : ''}
      </div>
    )
  }