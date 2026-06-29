"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ClinicMap() {
  return (
    <MapContainer
      center={[-26.2041, 28.0473]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-26.2041, 28.0473]}>
        <Popup>Johannesburg Clinic Manager App</Popup>
      </Marker>
    </MapContainer>
  );
}
