const request = require('request')

const geocode = (address, callback) => {
    const url =" https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYWJkYWFsIiwiYSI6ImNrZW9jNmZkMTAwdjYyc25vaGl2a25iamUifQ.mlW75oHpr6rWHC7FHB9Nhg&limit=1";
    request({ url:url, json: true }, (error,  body ) => {
       
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.body.features[0].length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.body.features[0].center[1],
                longitude: body.body.features[0].center[0],
                location: body.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode