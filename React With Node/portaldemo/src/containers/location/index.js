import React from 'react';
import {geolocated} from 'react-geolocated';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};

class Demo extends React.Component {
 onMapCreated(map) {
    map.setOptions({
        disableDefaultUI: true
    });
    }
    
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <Gmaps
          width={'800px'}
          height={'600px'}
          lat={this.props.coords.latitude}
          lng={this.props.coords.longitude}
          zoom={15}
          loadingMessage={'Loading Location'}
          params={params}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={this.props.coords.latitude}
            lng={this.props.coords.longitude}
            draggable={true}
            onDragEnd={this.onDragEnd} />
        </Gmaps>
          : <div>Getting the location data&hellip; </div>;
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);

// https://www.npmjs.com/package/react-google-autocomplete