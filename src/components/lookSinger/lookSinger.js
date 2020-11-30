import React, { Component } from 'react'
import './lookSinger.css'
export default class LookSinger extends Component {
    state = {
        singer: {}
    }
    componentDidMount () {
        let { singer } = this.props.location.state;
        singer = singer.replace(/ /g,"+");
        console.log(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${singer}&api_key=a3c9fd095f275f4139c33345e78741ed&format=json`)
        const fetchData = async () => {
        try {
            const response = await fetch(
                `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${singer}&api_key=a3c9fd095f275f4139c33345e78741ed&format=json`
            );
            const data = await response.json();
            console.log(data)
            this.setState({
                singer: data
            })
          } catch (error) {
            console.log(error.message);
          }
        }
        fetchData();
    }
      render() {
        let singer = this.state.singer
        if (!singer.artist) {
            return <div>Loding singer info...</div>
        }
        const listTags = singer.artist.tags.tag.map((tag) =>
            <>{tag.name} </>
        );
        return(
            <div className={'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row"
                style={{display:'flex',flexDirection:'row-reverse'}}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">
                            {listTags} 
                            </div>
                            <h1 className='heading'>{singer.artist.name}</h1>
                            <p className='home__hero-subtitle'>
                            {singer.artist.bio.summary}
                            </p>
                        </div>
                    </div>
                    <div className="home__hero-img-wrapper">
                        <img width="400px" src={singer.artist.image[1]["#text"]} alt="Artist"/>
                    </div>
                </div>
            </div>
        </div>
        )
      }
}
