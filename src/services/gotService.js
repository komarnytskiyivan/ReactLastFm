export default class GotService {
    constructor(){
        this._apiBase = 'http://ws.audioscrobbler.com/2.0/'
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllSongs = async () => {
        const res = await this.getResource(`?method=chart.gettoptracks&api_key=a3c9fd095f275f4139c33345e78741ed&format=json`);
        let result = Object.entries(res);
        let rez = Object.entries(result);
        console.log(rez);
        return rez.map(this._transformSong);
    }
    _transformSong = (song) => {
        return {
            name: this.isSet(song.toptracks.track[1].name),
            artistname: this.isSet(song.toptracks.track[1].artist.name),
            // image: this.isSet(song.song.toptracks.track[1].image[2].#text),
            artisturl: this.isSet(song.song.toptracks.track[1].artist.url)
        };
    }
}