import './homePage.css'
import React, { Fragment, useEffect, useState } from "react";

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

  return (
    <div className="App">
      {topSongs?.tracks?.track.length &&
        topSongs.tracks.track.map((datumn) => {
          return (
            <Fragment key={datumn.name}>
              <div className={'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row"
                style={{display:'flex',flexDirection:'row-reverse'}}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{datumn.artist.name}</div>
                            <h1 className='heading'>{datumn.name}</h1>
                            <p className='home__hero-subtitle'>
                            {datumn.artist.url}
                            </p>
                        </div>
                    </div>
                    <div className="home__hero-img-wrapper">
                        <img width="400px" src={datumn.image[1]["#text"]} alt="Image of the track"/>
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