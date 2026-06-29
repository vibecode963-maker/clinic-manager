"use client";

import dynamic from "next/dynamic";
import React from "react";

const ClinicMap = dynamic(() => import("./ClinicMap"), { ssr: false });

export default function ClinicMapClient() {
  return <ClinicMap />;
}
