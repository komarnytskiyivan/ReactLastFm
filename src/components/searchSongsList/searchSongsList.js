import React, { Fragment } from "react";
import ItemDetails from '../ui/itemDetails/itemDetails'
export default function ItemList(songs) {
    return (
        <div>
      {
        songs.songs.results.trackmatches.track.map((datumn) => {
          return (
            <Fragment key={datumn.name}>
                <ItemDetails topLine={datumn.artist}
                    heading={datumn.name}
                    subTitle={''}
                    image={datumn.image[1]["#text"]}
                />
            </Fragment>
          );
        })}
    </div>
    )
}
