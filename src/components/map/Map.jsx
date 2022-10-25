import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { accessToken } from "mapbox-gl";
import MapboxDirection from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import { Box } from "@mui/system";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const Map = ({
  from = "Nairobi, Nairobi, Kenya",
  to = "Thika, Kiambu, Kenya",
  long = 37.06,
  lat = 0.04,
}) => {
  accessToken = process.env.REACT_APP_MAPBOX_KEY;
  const [data, setData] = useState([]);
  const [distance, setDistance] = useState([]);

  const coordinates = [37.06, 0.04];

  const handleChange = async (event) => {
    const endPoint = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${accessToken}`;
    try {
      const response = await fetch(endPoint);
      const results = setData(response.json());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  const mapContainer = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [long, lat],
      zoom: 17,
    });

    const directions = new MapboxDirection({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      alternatives: true,
      geometries: false,
      controls: { instructions: true },
      flyTo: false,
    });

    map.on("load", function () {
      directions.setOrigin(from);
      directions.setDestination(to);
    });

    directions.on("route", (e) => {
      // routes is an array of route objects as documented here:
      // https://docs.mapbox.com/api/navigation/#route-object
      let routes = e.route;
      console.log(routes);
      // Each route object has a distance property
      console.log(
        "Route lengths",
        routes.map((r) => setDistance([r]))
      );
    });

    map.addControl(directions, "top-left");
    map.scrollZoom.enable();
  }, []);
  console.log(distance);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "60vw",
        height: "60vh",
        gap: 3,
      }}
      ref={mapContainer}
      className="map-container"
    ></Box>
  );
};

export default Map;
