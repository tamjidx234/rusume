import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

function Spaceship() {
  const { scene } = useGLTF('/spaceship.glb');
  return <primitive object={scene} scale={0.5} position={[0, -1, -3]} />;
}

export default function SciFiLandingPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      <motion.h1 
        className="text-5xl font-bold mb-4 text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to the Future
      </motion.h1>
      <motion.p 
        className="text-lg mb-6 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explore the depths of space and technology
      </motion.p>
      <div className="h-full w-full absolute top-0 left-0">
        <Canvas>
          <Suspense fallback={null}>
            <Stars />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Spaceship />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
