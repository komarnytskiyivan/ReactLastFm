import React, { Component } from 'react'
import './lookSinger.css'
import ItemDetails from '../../ui/itemDetails/itemDetails'
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
            return <div>Loading singer info...</div>
        }
        const listTags = singer.artist.tags.tag.map((tag) =>
            <>{tag.name} </>
        );
        return(
        <ItemDetails topLine={listTags}
            heading={singer.artist.name}
            subTitle={singer.artist.bio.summary}
            image={singer.artist.image[1]["#text"]}
            notLink={'yes'}
        />
        )
      }
}
