# iTunes Search

This package will allow you to search and get metadata of music, tv shows or artist with the iTunes Web Search API.

## Requirements

- Node 12 or above (LTS recommended)

## Usages

ES5 Syntax

```js
const iTunesSearch = require('itunes-search');
const iTunes = new iTunesSearch();
iTunes
  .searchSong('Summerhouse in Winter - Bing Satellites', {
    limit: 1,
    language: 'en',
    country: 'US',
  })
  .then((result) => console.log(result)); // -> { song object }
```

ES6 Syntax

```js
import iTunesSearch from 'itunes-search';

const main = async () => {
  const iTunes = new iTunesSearch();
  const result = await iTunes.searchSong(
    'Summerhouse in Winter - Bing Satellites',
    {
      limit: 1,
      language: 'en',
      country: 'US',
    }
  );

  console.log(result); // -> { song object }
};

main();
```

### Example Output for Song

```json
{
  "resultCount": 1,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 869343590,
      "collectionId": 980166168,
      "trackId": 980166169,
      "artistName": "Bing Satellites",
      "collectionName": "Twilight Sessions Volume 15",
      "trackName": "Summerhouse in Winter",
      "collectionCensoredName": "Twilight Sessions Volume 15",
      "trackCensoredName": "Summerhouse in Winter",
      "artistViewUrl": "https://music.apple.com/us/artist/bing-satellites/869343590?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/summerhouse-in-winter/980166168?i=980166169&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/summerhouse-in-winter/980166168?i=980166169&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/Music1/v4/2b/39/68/2b3968bc-c091-1153-4e54-e8dec1ebf7ed/mzaf_2106946560433193997.plus.aac.p.m4a",
      "artworkUrl30": "https://is4-ssl.mzstatic.com/image/thumb/Music2/v4/c0/89/7c/c0897ca7-5125-7905-e757-6897369fedd7/source/30x30bb.jpg",
      "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Music2/v4/c0/89/7c/c0897ca7-5125-7905-e757-6897369fedd7/source/60x60bb.jpg",
      "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music2/v4/c0/89/7c/c0897ca7-5125-7905-e757-6897369fedd7/source/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": -1,
      "releaseDate": "2015-04-25T12:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 3,
      "trackNumber": 1,
      "trackTimeMillis": 967529,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Electronic",
      "isStreamable": true
    }
  ]
}
```

if you don't get results, you will get this:

```json
{
  "resultCount": 0,
  "results": []
}
```

## Explore the API

- [searchAlbum](./docs/searchAlbum.md)
- [searchAll](./docs/searchAll.md)
- [searchApp](./docs/searchApp.md)
- [searchArtist](./docs/searchArtist.md)
- [searchAudiobook](./docs/searchAudiobook.md)
- [searchBook](./docs/searchBook.md)
- [searchMovie](./docs/searchMovie.md)
- [searchMusicVideo](./docs/searchMusicVideo.md)
- [searchPodcast](./docs/searchPodcast.md)
- [searchSong](./docs/searchSong.md)
