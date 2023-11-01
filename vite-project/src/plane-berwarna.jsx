
/*
import React, { useCallback, useMemo, useRef } from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export default function Plane_berwarna() {
  const width = 50;
  const height = 50;
  const segmentsX = 100;
  const segmentsY = 100;
  const jarak = width / segmentsX;

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  const bufferRef = useRef();

  let t = 0;


  let frequency = 0.06; // Frekuensi gelombang
  let amplitude = 0.5; // Amplitudo gelombang
  let xOffset = 1; // Pemindahan pusat gelombang sejauh 15 satuan pada sumbu x
  let zOffset = -5; // Pemindahan pusat gelombang sejauh 10 satuan pada sumbu z

  const graph = useCallback((x, z) => {
    return Math.sin(frequency * ((x - xOffset) ** 2 + (z - zOffset) ** 2 + t)) * amplitude;
  }, [t, frequency, amplitude, xOffset, zOffset]);

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;

      const xPos = jarak * (y - segmentsY / 2) + jarak / 2; // Pindahkan gelombang ke pinggir plane
      const zPos = jarak * (x - segmentsX / 2) + jarak / 2; // Pindahkan gelombang ke pinggir plane

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

  useFrame((state) =>
  {


     t += -1.5;

      console.log(bufferRef.current.geometry.attributes.position.array);

      const vertices = bufferRef.current.geometry.attributes.position.array
     

      let i = 0;
      for (let y = 0; y <= segmentsY; y++) {
        for (let x = 0; x <= segmentsX; x++) {
          const u = x / segmentsX;
          const v = y / segmentsY;
    
          const xPos = jarak * (y - segmentsY / 2) + jarak / 2; // Pindahkan gelombang ke pinggir plane
          const zPos = jarak * (x - segmentsX / 2) + jarak / 2; // Pindahkan gelombang ke pinggir plane
    
       
          vertices[i + 1] = graph(xPos, zPos);
          i += 3;
        
        }
      }

      bufferRef.current.geometry.attributes.position.needsUpdate = true;
  })

  
  


  const geometry = useMemo(() => {
    const bufferGeometry = new BufferGeometry();
    bufferGeometry.setIndex(indices);
    bufferGeometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
    bufferGeometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
    bufferGeometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));
    return bufferGeometry;
  }, []);

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh 
        geometry={geometry} 
        rotation-x={Math.PI} 
        position={[68, 0, 18]} 
        material={wireframeMaterial} 
        ref={bufferRef} />
  );
}

*/


import * as THREE from 'three';
import React, { useCallback, useMemo, useRef } from 'react';
import { BufferGeometry, BufferAttribute, MeshStandardMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import {  Caustics, MeshReflectorMaterial, Float, Text, Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'

export default function Plane_berwarna() {
  const width = 10;
  const height = 10;
  const segmentsX = 200;
  const segmentsY = 200;
  //const jarak = width / segmentsX;

  const jarak = 0.11;

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  const bufferRef = useRef();

  let t = 0;

  let frequency = 0.14; // Frekuensi gelombang
  let amplitude = 0.06; // Amplitudo gelombang
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

  const material = useMemo(() => {
    return new MeshStandardMaterial({
      color: 'lightblue', // Warna biru muda
      transparent: true,
      opacity: 0.5, // Tingkat kejernihan (1 adalah butek, 0 adalah bening)
    });
  }, []);

  return (
    <Caustics
        backfaces
        color={[1, 0.8, 0.8]}
        focus={[0, -1.2, 0]}
        lightSource={[-2, 2.5, -2.5]}
        frustum={1.75}
        intensity={0.005}
        worldRadius={0.66 / 10}
        ior={0.6}
        backfaceIor={1.26}
    >
          <mesh 
            geometry={geometry} 
            rotation-x={0} 
            position={[0, 0.1, 3]} 
            material={material}
            ref={bufferRef} 
          >
              {/*<MeshTransmissionMaterial thickness={0.2} chromaticAberration={0.05} anisotropy={1.5} clearcoat={1} clearcoatRoughness={0.2} envMapIntensity={3} /> */}
            </mesh>

    </Caustics>
  );
}

