
/*
import * as THREE from 'three'

import { BoxGeometry, PlaneGeometry,  BufferGeometry, BufferAttribute } from 'three';

import { shaderMaterial } from '@react-three/drei'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'

import {  useFrame, extend } from '@react-three/fiber'
import { useRef } from 'react'

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#ffffff'),
        uColorEnd: new THREE.Color('#000000')
    },
    portalVertexShader,
    portalFragmentShader
)

extend({ PortalMaterial })



export default  function Kotak() {
    // Create a PlaneGeometry
  
    
    const geometry = new BufferGeometry();
  
      
    const vertices = new Float32Array([
      -1.0, -1.0, 1.0, // v0
      1.0, -1.0, 1.0, // v1
      1.0, 1.0, 1.0, // v2
      -1.0, 1.0, 1.0, // v3
    ]);
  
    const indices = [0, 1, 2, 2, 3, 0];
    
      
  
      // Set indices and position attributes
      geometry.setIndex(indices);
      geometry.setAttribute("position", new BufferAttribute(vertices, 3));
      
  
      const normals = [];
      const uvs = []; // Initialize an array for UV coordinates


      for (let i = 0; i < indices.length; i += 3) {
        const v0 = new THREE.Vector3(vertices[indices[i] * 3], vertices[indices[i] * 3 + 1], vertices[indices[i] * 3 + 2]);
        const v1 = new THREE.Vector3(vertices[indices[i + 1] * 3], vertices[indices[i + 1] * 3 + 1], vertices[indices[i + 1] * 3 + 2]);
        const v2 = new THREE.Vector3(vertices[indices[i + 2] * 3], vertices[indices[i + 2] * 3 + 1], vertices[indices[i + 2] * 3 + 2]);
        
        const normal = new THREE.Vector3();
        normal.crossVectors(v1.sub(v0), v2.sub(v0)).normalize();
        
        normals.push(normal.x, normal.y, normal.z);
        uvs.push(0, 0); // You may need to adjust these coordinates based on your UV mapping
  
      }
      
      geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
      geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2)); // Set the UV attribute

      
      

      //const geometry = new PlaneGeometry(2, 2); // Set the size you want here
     // const geometry = new BoxGeometry(3, 2, 1);
    const portalMaterial = useRef()

    useFrame((state, delta) =>
    {
        portalMaterial.current.uTime += delta
    })
  
    



    return <>

             <mesh geometry={ geometry } >


                  <portalMaterial  ref={ portalMaterial } /> 


            </mesh>



    </>
    
  
  }

  */



  
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

function createGeometry() {
  const geometry = new BufferGeometry();

  const vertices = new Float32Array([
    -1.0, -1.0, 0.0, // v0
    1.0, -1.0, 0.0, // v1
    1.0, 1.0, 0.0,  // v2
    -1.0, 1.0, 0.0, // v3
  ]);

  const indices = [0, 1, 2, 2, 3, 0];

  // Set indices and position attributes
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(vertices, 3));

  const normals = [];
  const uvs = [];

  for (let i = 0; i < indices.length; i += 3) {
    // Calculate normals for a flat surface (all normals point in the same direction)
    const normal = new THREE.Vector3(0, 0, 1);

    normals.push(normal.x, normal.y, normal.z);

    // Calculate UV coordinates
    uvs.push(0, 0);
    uvs.push(1, 0);
    uvs.push(1, 1);
    uvs.push(0, 1);
  }

  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

  return geometry;
}

export default function Kotak() {
  const geometry = createGeometry();
  const portalMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <mesh geometry={geometry}>
      <portalMaterial ref={portalMaterial} />
    </mesh>
  );
}

  


/*
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

function createGeometry() {
  const geometry = new BufferGeometry();

  const vertices = new Float32Array([
    -5, -1, -2,
    -5, -1, 2,
    -5, 1, -2,
    -5, 1, 2,
    5, -1, -2,
    5, 1, -2,
    5, -1, 2,
    5, 1, 2,
    -5, -1, -2,
    5, -1, -2,
    -5, -1, 2,
    5, -1, 2,
    -5, 1, -2,
    -5, 1, 2,
    5, 1, -2,
    5, 1, 2,
    -5, -1, -2,
    -5, 1, -2,
    5, -1, -2,
    5, 1, -2,
    -5, -1, 2,
    5, 1, 2,
    -5, -1, 2,
    5, 1, 2
  ]);

  const indices = [
    0, 1, 2,
    2, 1, 3,
    4, 5, 6,
    6, 5, 7,
    12, 13, 14,
    14, 13, 15,
    16, 17, 18,
    18, 17, 19,
    20, 21, 22,
    22, 21, 23
  ];

  // Set indices and position attributes
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(vertices, 3));

  const normals = [];
  const uvs = [];

  for (let i = 0; i < indices.length; i += 3) {
    // Calculate normals for a flat surface (all normals point in the same direction)
    const normal = new THREE.Vector3(0, 0, 1);

    normals.push(normal.x, normal.y, normal.z);

    // Calculate UV coordinates
    uvs.push(0, 0);
    uvs.push(1, 0);
    uvs.push(1, 1);
  }

  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

  return geometry;
}

export default function Kotak() {
  const geometry = createGeometry();
  const portalMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <mesh geometry={geometry}>
      <portalMaterial ref={portalMaterial} />
    </mesh>
  );
}

*/

