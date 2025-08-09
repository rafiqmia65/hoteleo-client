import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Map = () => {
  return (
    <div className="h-[300px] w-full">
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg shadow-md z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>
            Hoteleo Office <br /> Dhaka, Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
