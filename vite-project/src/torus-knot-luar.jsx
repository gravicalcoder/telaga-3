import * as THREE from 'three';
import { BufferGeometry, BufferAttribute } from 'three';
import { shaderMaterial } from '@react-three/drei';
import portalVertexShader from './shaders/portal/vertex.glsl';
import portalFragmentShader from './shaders/portal/fragment.glsl';
import { useFrame, extend } from '@react-three/fiber';
import { useRef } from 'react';

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000'),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });




export default function Knot() {
  // const geometry = createGeometry();
  const portalMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <mesh position={[10, 3, 0]}>
        <torusKnotGeometry args={[3, 0.7, 700, 60, 3, 5]} />
      <portalMaterial ref={portalMaterial} />
    </mesh>
  );
}