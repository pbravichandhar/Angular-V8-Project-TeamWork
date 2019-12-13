import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

import { GeoJson } from '../../class/map';

import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css'

import { MapService } from '../../service/map.service'

@Component({
  selector: 'monorepo-project-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  locData = {}
  map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/outdoors-v9';
  // style = 'mapbox://styles/jose-95/ck3zskgis2a711co7itdb1y0e';
  // style = 'mapbox://styles/mapbox/light-10';
  style = 'mapbox://styles/mapbox/dark-v10';
  lat = 38.913;
  lng = -77.032;
  message = 'Hello World!';
  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: "Feature",
        properties: {
          message: "Foo",
          iconSize: [30, 30]
        },
        geometry: {
          type: "Point",
          coordinates: { lng: -66.324462890625, lat: -16.024695711685304 }
        }
      },
      {
        type: "Feature",
        properties: {
          message: "Bar",
          iconSize: [30, 30]
        },
        geometry: {
          type: "Point",
          coordinates: { lng: -61.2158203125, lat: -15.25222972551417 }
        }
      },
      {
        type: "Feature",
        properties: {
          message: "Baz",
          iconSize: [30, 30]
        },
        geometry: {
          type: "Point",
          coordinates: { lng: -63.29223632812499, lat: -18.28151823530889 }
        }
      }
    ]
  };

  source: any;
  markers: any;

  constructor(
    private mapService: MapService
  ) {
  }

  ngOnInit() {
    this.initializeMap()
  }

  private heatMap() {
    
  }

  private initializeMap() {
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.mapbox.accessToken);
    const Newmap = new mapboxgl.Map({
      container: "map",
      style: this.style,
      center: [-120, 50],
      zoom: 2
    });

    // Add map controls
    Newmap.addControl(new mapboxgl.NavigationControl());

    this.geojson.features.forEach((marker) => {

      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(Newmap);
    });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });


    // heat map
    Newmap.on('load', function () {
      // Add a geojson point source.
      // Heatmap layers also work with a vector tile source.
      Newmap.addSource('earthquakes', {
        'type': 'geojson',
        'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson'
      });

      Newmap.addLayer(
        {
          'id': 'earthquakes-heat',
          'type': 'heatmap',
          'source': 'earthquakes',
          'maxzoom': 9,
          'paint': {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              0,
              0,
              6,
              1
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              1,
              9,
              3
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'rgba(33,102,172,0)',
              0.2,
              'rgb(103,169,207)',
              0.4,
              'rgb(209,229,240)',
              0.6,
              'rgb(253,219,199)',
              0.8,
              'rgb(239,138,98)',
              1,
              'rgb(232, 230, 230)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              2,
              9,
              20
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              1,
              9,
              0
            ]
          }
        },
        'waterway-label'
      );

      // Newmap.addLayer(
      //   {
      //     'id': 'earthquakes-point',
      //     'type': 'circle',
      //     'source': 'earthquakes',
      //     'minzoom': 7,
      //     'paint': {
      //       // Size circle radius by earthquake magnitude and zoom level
      //       'circle-radius': [
      //         'interpolate',
      //         ['linear'],
      //         ['zoom'],
      //         7,
      //         ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
      //         16,
      //         ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
      //       ],
      //       // Color circle by earthquake magnitude
      //       'circle-color': [
      //         'interpolate',
      //         ['linear'],
      //         ['get', 'mag'],
      //         1,
      //         'rgba(33,102,172,0)',
      //         2,
      //         'rgb(103,169,207)',
      //         3,
      //         'rgb(209,229,240)',
      //         4,
      //         'rgb(253,219,199)',
      //         5,
      //         'rgb(239,138,98)',
      //         6,
      //         'rgb(178,24,43)'
      //       ],
      //       'circle-stroke-color': 'white',
      //       'circle-stroke-width': 1,
      //       // Transition from heatmap to circle layer by zoom level
      //       'circle-opacity': [
      //         'interpolate',
      //         ['linear'],
      //         ['zoom'],
      //         7,
      //         0,
      //         8,
      //         1
      //       ]
      //     }
      //   },
      //   'waterway-label'
      // );
    });

    // add markers to map while load the map
    this.geojson.features.forEach((marker) => {
      // create a DOM element for the marker
      const id = `${marker.geometry.coordinates['lat']}-${marker.geometry.coordinates['lng']}`
      const el = document.createElement("div");
      el.className = "marker";
      el.id = id
      el.style.backgroundImage = "url(https://image.flaticon.com/icons/svg/121/121383.svg)";
      el.style.width = marker.properties.iconSize[0] + "px";
      el.style.height = marker.properties.iconSize[1] + "px";
      el.style.backgroundSize = 'cover';
      this.mapService.getUserData(this.getLocationDetails(marker.geometry.coordinates['lat'], marker.geometry.coordinates['lng']))
        .subscribe(
          books => this.locData[id] = books
        );
      // add marker to map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(Newmap);
      // Display a popup when hovering over the marker 
      el.addEventListener('mousemove', (e) => {
        const data = `<p>${this.formatLocationData(this.locData[el.id]) || 'No Data Available'}</p>`
        popup.setLngLat(marker.geometry.coordinates)
          .setHTML(data)
          .addTo(Newmap);
      });
      el.addEventListener('mouseout', (e) => {
        popup.remove();
      });
    });

    // Create a popup, but don't add it to the map yet.

    Newmap.on('click', (e) => {
      const el = document.createElement('div');
      const id = `${e.lngLat['lat']}-${e.lngLat['lng']}`
      el.className = "marker";
      el.style.backgroundImage = "url(https://image.flaticon.com/icons/svg/121/121383.svg)";
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.backgroundSize = 'cover';
      const marker = new mapboxgl.Marker(el).setLngLat(e.lngLat).addTo(Newmap);
      this.mapService.getUserData(this.getLocationDetails(e.lngLat['lat'], e.lngLat['lng']))
        .subscribe(
          books => this.locData[el.id] = books
        );
      // Display a popup when hovering over the marker 
      el.addEventListener('mousemove', (ev) => {
        const data = `<p>${this.formatLocationData(this.locData[el.id]) || 'No Data Available'}</p>`
        popup.setLngLat(e.lngLat)
          .setHTML(data)
          .addTo(Newmap);
      });
      el.addEventListener('mouseout', (event) => {
        event.stopPropagation();
        popup.remove();
      });

      el.addEventListener('click', (ev) => {
        ev.stopPropagation();
        marker.remove();
        popup.remove();
      });

    });
  }

  getLocationDetails(lat, lng) {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${environment.mapbox.accessToken}`
  }

  formatLocationData(data) {
    let placeName = ''
    if (data.features) {
      data.features.map((mapData) => {
        placeName += `,${mapData.text}`
      })
    }
    return placeName.replace(/^,|,$/g, '')
  }

}
