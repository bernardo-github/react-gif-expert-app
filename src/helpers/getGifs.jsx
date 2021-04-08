export  const getGifs = async( category ) => {
       
    const api_key= 'SzTGB7rnELWEXmMg3mJRybSV8IRY0CLa'
    const url_base='https://api.giphy.com/v1/gifs/search'
    const limit = '10'
    const resp = await fetch(`${ url_base }?q=${ encodeURI( category ) }&api_key=${ api_key }&limit=${ limit }`);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
} 