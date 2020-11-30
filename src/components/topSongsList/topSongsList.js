import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ItemDetails from '../ui/itemDetails/itemDetails'
export default function ItemList(songs) {
    return (
        <div>
      {
        songs.songs.tracks.track.map((datumn) => {
          return (
            <Fragment key={datumn.name}>
                <ItemDetails topLine={datumn.artist.name}
                    heading={datumn.name}
                    subTitle={datumn.artist.url}
                    image={datumn.image[1]["#text"]}
                />
            </Fragment>
          );
        })}
    </div>
    )
}
