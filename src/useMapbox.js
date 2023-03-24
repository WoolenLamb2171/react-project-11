import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapBox(
  container,
  center = [27.57, 53.9],
  zoom = 10
) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: container.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: center,
      zoom: zoom
    });
  }, []);
}
