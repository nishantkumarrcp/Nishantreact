import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import MasterPage from '../../components/masterpage';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};
 
const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};
 
export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          restaurants: [
              { lat: 51.1, lng:-0.08040660000006028 },
              { lat: 51.2, lng:-0.08040660000006028 },
              { lat: 51.3, lng:-0.08040660000006028 },
              { lat: 51.4, lng:-0.08040660000006028 },
              { lat: 51.5, lng:-0.08040660000006028 },
          ]
      }
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
    return (
    <MasterPage title="Restaurants">
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={9}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        {this.state.restaurants.map(item =>  
         <Marker
          lat={item.lat}
          lng={item.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />)}
      </Gmaps>
      </MasterPage>
    );
  }
 
};