/**
 * promiseToFlyTo
 * @description
 */


/**
 * getCurrentLocation
 * @description
 */

export function getCurrentLocation() {
  return new Promise(( resolve, reject ) => {
    navigator.geolocation.getCurrentPosition(
      ( pos ) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      ( err ) => reject( err )
    );
  });
}
