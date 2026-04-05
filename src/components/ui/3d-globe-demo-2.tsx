"use client";
import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
];

export default function Globe3DDemoSecond() {
  return (
    <div className="relative my-16 h-[400px] w-full max-w-lg overflow-hidden rounded-xl bg-surface p-10 border border-stroke">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Global Systems & Reach
      </h2>

      <p className="text-muted-foreground">
        Building scalable applications and cloud systems across multiple regions.
      </p>

      <Globe3D
        className="absolute -bottom-96 left-0 h-[700px]"
        markers={sampleMarkers}
        config={{
          atmosphereColor: "#4da6ff",
          atmosphereIntensity: 20,
          bumpScale: 5,
          autoRotateSpeed: 0.3,
        }}
      />
    </div>
  );
}
