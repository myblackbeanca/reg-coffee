import React from 'react';
import { Music, ExternalLink } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import { HexagonMesh } from './MixtapeGrid';

const contributingArtists = [
  {
    name: "Kathleen Edwards",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1024",
    description: "Featuring Lauren Morrow",
    link: "https://go.minyvinyl.com/kathleen"
  },
  {
    name: "Ringo Starr",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80&w=1024",
    description: "Featuring Alison Krauss",
    link: "https://go.minyvinyl.com/ringo"
  },
  {
    name: "Holy Pinto",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1024",
    description: "Exclusive mixtape curator",
    link: "https://go.minyvinyl.com/holy"
  }
];

const ArtistCard = ({ artist }: { artist: typeof contributingArtists[0] }) => (
  <div className="relative h-[400px] bg-neutral-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
    <Canvas 
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      shadows 
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.25}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      <Environment preset="studio" />
      <HexagonMesh imageUrl={artist.image} isPlaying={true} />
    </Canvas>

    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
      <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
      <p className="text-gray-300 text-sm mb-4">{artist.description}</p>
      <a
        href={artist.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 btn btn-primary"
      >
        <Music className="w-4 h-4" />
        Listen Now
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const ArtistMixtapes = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Artist Curated Mixtapes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exclusive collections curated by our featured artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributingArtists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistMixtapes;