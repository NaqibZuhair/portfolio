import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { FallbackGraphic } from "./FallbackGraphic";
import { useReducedMotion } from "../hooks/useReducedMotion";

function FuturisticMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.15;
      wireRef.current.rotation.y += delta * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.1;
      // Pointer responsive tilt
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (-state.pointer.y * Math.PI) / 8;
      outerRingRef.current.rotation.x = THREE.MathUtils.lerp(
        outerRingRef.current.rotation.x,
        targetY,
        0.05
      );
      outerRingRef.current.rotation.y = THREE.MathUtils.lerp(
        outerRingRef.current.rotation.y,
        targetX,
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <group ref={outerRingRef}>
        {/* Core solid geometric polyhedron */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#11141C"
            roughness={0.2}
            metalness={0.9}
            wireframe={false}
          />
        </mesh>

        {/* Outer glowing wireframe envelope */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.9, 1]} />
          <meshStandardMaterial
            color="#8AB4FF"
            emissive="#8AB4FF"
            emissiveIntensity={0.6}
            wireframe={true}
            transparent={true}
            opacity={0.45}
          />
        </mesh>

        {/* Orbiting Tech Rings */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#8266B5" transparent opacity={0.6} />
        </mesh>

        <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.8, 0.015, 16, 100]} />
          <meshBasicMaterial color="#65C9AE" transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export const HeroScene: React.FC<{ className?: string }> = ({ className }) => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (reducedMotion || hasWebGL === false || hasError) {
    return <FallbackGraphic className={className} />;
  }

  return (
    <div className={className}>
      <Suspense fallback={<FallbackGraphic />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          onError={() => setHasError(true)}
          style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#8AB4FF" />
          <pointLight position={[-10, -10, -5]} intensity={1.2} color="#8266B5" />
          <FuturisticMesh />
        </Canvas>
      </Suspense>
    </div>
  );
};

