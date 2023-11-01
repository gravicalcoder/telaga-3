
import * as THREE from 'three';
import React, { useCallback, useMemo, useRef } from 'react';
import { BufferGeometry, BufferAttribute, MeshStandardMaterial } from 'three';
import { useFrame, extend  } from '@react-three/fiber';

import { shaderMaterial } from '@react-three/drei';
import portalVertexShader from './shaders/portal/vertex.glsl';
import portalFragmentShader from './shaders/portal/fragment.glsl';

const PortalMaterial = shaderMaterial(
    {
      uTime: 0,
      uColorStart: new THREE.Color('#ff1133'),
      uColorEnd: new THREE.Color('#000000'),
    },
    portalVertexShader,
    portalFragmentShader
  );
  
  extend({ PortalMaterial });

export default function Plane_bershader() {
  const width = 10;
  const height = 10;
  const segmentsX = 200;
  const segmentsY = 200;
  //const jarak = width / segmentsX;

  const jarak = 0.1;

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  const bufferRef = useRef();


  let t = 0;

  let frequency = 0.18; // Frekuensi gelombang
  let amplitude = 2.75; // Amplitudo gelombang
  let xOffset = 1; // Pemindahan pusat gelombang sejauh 1 satuan pada sumbu x
  let zOffset = 0; // Pemindahan pusat gelombang sejauh -5 satuan pada sumbu z

  const graph = useCallback((x, z) => {
    return Math.sin(frequency * ((x - xOffset) ** 2 + (z - zOffset) ** 2 + t)) * amplitude;
  }, [t, frequency, amplitude, xOffset, zOffset]);

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;

      const xPos = jarak * (y - segmentsY / 2) + jarak / 2;
      const zPos = jarak * (x - segmentsX / 2) + jarak / 2;

      const yPos = graph(xPos, zPos);

      vertices.push(xPos, yPos, zPos);
      normals.push(0, 1, 0);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  useFrame((state) => {
    t += -0.5;

    const positions = bufferRef.current.geometry.attributes.position.array;

    let i = 0;
    for (let y = 0; y <= segmentsY; y++) {
      for (let x = 0; x <= segmentsX; x++) {
        const u = x / segmentsX;
        const v = y / segmentsY;

        const xPos = jarak * (y - segmentsY / 2) + jarak / 2;
        const zPos = jarak * (x - segmentsX / 2) + jarak / 2;

        positions[i + 1] = graph(xPos, zPos);
        i += 3;
      }
    }

    bufferRef.current.geometry.attributes.position.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const bufferGeometry = new BufferGeometry();
    bufferGeometry.setIndex(indices);
    bufferGeometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
    bufferGeometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
    bufferGeometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));
    return bufferGeometry;
  }, []);

  const portalMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <mesh 
      geometry={geometry} 
      rotation-x={0} 
      position={[25, 0.5, 2]} 
      
      ref={bufferRef} 
    >
        <portalMaterial ref={portalMaterial} />
        </mesh>
  );
}

