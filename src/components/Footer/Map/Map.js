import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ margin:'0px 100px', height: '150px', width: '300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDAJ1rpflRBPGcnd3-JQZosxBd5vEUmNlo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Map"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;