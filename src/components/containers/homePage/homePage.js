import './homePage.css';
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopSongsList from '../../topSongsList/topSongsList'
export default function HomePage() {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a3c9fd095f275f4139c33345e78741ed&format=json"
        );
        const data = await response.json();
        setTopSongs(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  if (topSongs == 0) {
    return <div>Loading songs info...</div>
  }
  return (
    <TopSongsList songs={topSongs}/>
  )
}