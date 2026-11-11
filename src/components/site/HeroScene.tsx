import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const TEAL = "#0F4C5C", GREY = "#D8DDE3";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(2500 * 3);
    for (let i = 0; i < 2500; i++) {
      const r = 4 + Math.random() * 8, t = Math.random() * Math.PI * 2, p = Math.acos(2 * Math.random() - 1);
      a[i * 3] = r * Math.sin(p) * Math.cos(t); a[i * 3 + 1] = r * Math.sin(p) * Math.sin(t); a[i * 3 + 2] = r * Math.cos(p);
    }
    return a;
  }, []);
  useFrame((s, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += Math.min(d, 0.05) * 0.04;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, s.pointer.y * 0.3, 0.05);
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, s.pointer.x * 0.2, 0.05);
  });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={0.035} color={GREY} transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Orb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, 2 + s.pointer.x * 0.6, 0.04);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, s.pointer.y * 0.6, 0.04);
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} position={[2, 0, 0]}>
        <icosahedronGeometry args={[1.6, 64]} />
        <MeshDistortMaterial color={TEAL} roughness={0.15} metalness={0.8} distort={0.35} speed={1.8} />
      </mesh>
      <mesh position={[2, 0, 0]} scale={2.4}>
        <torusGeometry args={[1, 0.005, 16, 160]} />
        <meshBasicMaterial color={GREY} transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.75]} onCreated={({ gl }) => gl.domElement.parentElement?.setAttribute("data-scene-ready", "")}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={2} color={GREY} />
      <pointLight position={[-4, -2, 3]} intensity={30} color={TEAL} />
      <Particles />
      <Orb />
    </Canvas>
  );
}
