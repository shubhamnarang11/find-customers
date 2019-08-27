const LocationFinder = require('location-finder');

const serverLocation = {
    lat: 53.339428,
    lon: -6.257664
}
const regionArea = 100;

let RegisterObj;

function sortLocations(locations) {
    return locations.sort((a, b) => a.user_id - b.user_id)
}
function fetchLocations() {
    LocationFinder.RegisterLocation(serverLocation, regionArea).then((registerObj) => {
        RegisterObj = registerObj;

        RegisterObj.findLocations('./utils/customers.json').then((locations) => {
            const sortedLocations = sortLocations(locations);
            console.log(sortedLocations);
        }).catch(err => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })
}

fetchLocations();