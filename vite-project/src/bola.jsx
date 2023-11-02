
  
  import * as THREE from 'three';
  import { BufferGeometry, BufferAttribute } from 'three';
  import { shaderMaterial } from '@react-three/drei';
  import portalVertexShader from './shaders/portal/vertex.glsl';
  import portalFragmentShader from './shaders/portal/fragment.glsl';
  import { useFrame, extend } from '@react-three/fiber';
  import { useRef } from 'react';
  import { Mesh, MeshBasicMaterial } from "three";
  
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
  
  /*
  function createGeometry() {
    const geometry = new BufferGeometry();
  
    const vertices = new Float32Array([
      -1.0, -1.0, -3.0, // v0
      1.0, -1.0, -3.0, // v1
      1.0, 1.0, -3.0,  // v2
      -1.0, 1.0, -3.0, // v3
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
  */


  // z= 0
  /*
  function createGeometry() {
    const geometry = new THREE.BufferGeometry();
  
    const detail = 32; // Tingkat detail permukaan bola (banyaknya segmen lingkaran)
    const radius = 1; // Radius bola
  
    const vertices = [];
    const indices = [];
    const normals = [];
    const uvs = [];
  
    for (let i = 0; i <= detail; i++) {
      const phi = Math.PI * i / detail;
      for (let j = 0; j <= detail; j++) {
        const theta = 2 * Math.PI * j / detail;
  
        // Koordinat bola (dalam koordinat polar)
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
  
        // Tambahkan koordinat ke array vertices
        vertices.push(x, y, z);
  
        // Hitung vektor normal (sama dengan vektor posisi dalam kasus bola)
        normals.push(x, y, z);
  
        // Hitung koordinat UV (gunakan koordinat bola untuk sederhana)
        const u = j / detail;
        const v = i / detail;
        uvs.push(u, v);
  
        // Buat indeks segitiga
        if (i < detail && j < detail) {
          const a = i * (detail + 1) + j;
          const b = a + 1;
          const c = a + detail + 1;
          const d = c + 1;
          indices.push(a, b, c, c, b, d);
        }
      }
    }
  
    // Set indices and attributes
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
  
    return geometry;
  }
  
  */



  // z =-5
/* bola bulat

  function createGeometry() {
    const geometry = new THREE.BufferGeometry();
  
    const detail = 50; // Tingkat detail permukaan bola (banyaknya segmen lingkaran)
    const radius = 1; // Radius bola
    const zOffset = -5; // Jarak geser pada sumbu z
  
    const vertices = [];
    const indices = [];
    const normals = [];
    const uvs = [];
  
    for (let i = 0; i <= detail; i++) {
      const phi = Math.PI * i / detail;
      for (let j = 0; j <= detail; j++) {
        const theta = 2 * Math.PI * j / detail;
  
        // Koordinat bola (dalam koordinat polar)
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi) + zOffset; // Geser pada sumbu z
  
        // Tambahkan koordinat ke array vertices
        vertices.push(x, y, z);
  
        // Hitung vektor normal (sama dengan vektor posisi dalam kasus bola)
        normals.push(x, y, z);
  
        // Hitung koordinat UV (gunakan koordinat bola untuk sederhana)
        const u = j / detail;
        const v = i / detail;
        uvs.push(u, v);
  
        // Buat indeks segitiga
        if (i < detail && j < detail) {
          const a = i * (detail + 1) + j;
          const b = a + 1;
          const c = a + detail + 1;
          const d = c + 1;
          indices.push(a, b, c, c, b, d);
        }
      }
    }
  
    // Set indices and attributes
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
  
    return geometry;
  }

  */

  // setengah  bola

  // setengah bola

  /*
function createGeometry() {
  const geometry = new THREE.BufferGeometry();

  const detail = 50; // Tingkat detail permukaan bola (banyaknya segmen lingkaran)
  const radius = 1; // Radius bola
  const zOffset = -5; // Jarak geser pada sumbu z

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  for (let i = 0; i <= detail / 2; i++) {
    const phi = (Math.PI / 2) * (i / (detail / 2)); // Setengah lingkaran (0 hingga PI/2)

    for (let j = 0; j <= detail; j++) {
      const theta = (Math.PI * 2) * (j / detail);

      // Koordinat bola (dalam koordinat polar)
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi) + zOffset; // Geser pada sumbu z

      // Tambahkan koordinat ke array vertices
      vertices.push(x, y, z);

      // Hitung vektor normal (sama dengan vektor posisi dalam kasus bola)
      normals.push(x, y, z);

      // Hitung koordinat UV (gunakan koordinat bola untuk sederhana)
      const u = j / detail;
      const v = i / (detail / 2);
      uvs.push(u, v);

      // Buat indeks segitiga
      if (i < detail / 2 && j < detail) {
        const a = i * (detail + 1) + j;
        const b = a + 1;
        const c = a + detail + 1;
        const d = c + 1;
        indices.push(a, b, c, c, b, d);
      }
    }
  }

  // Set indices and attributes
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

  return geometry;
}

*/

// setengah bola diputar 180 derajat



function createGeometry() {
  const geometry = new THREE.BufferGeometry();

  const detail = 50; // Tingkat detail permukaan bola (banyaknya segmen lingkaran)
  const radius = 1; // Radius bola
  const zOffset = -5; // Jarak geser pada sumbu z

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  for (let i = 0; i <= detail / 2; i++) {
    const phi = (Math.PI / 2) - ((Math.PI / 2) * (i / (detail / 2))); // Setengah lingkaran (0 hingga PI/2), diputar 180 derajat di sekitar sumbu x

    for (let j = 0; j <= detail; j++) {
      const theta = (Math.PI * 2) * (j / detail);

      // Koordinat bola (dalam koordinat polar)
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi) + zOffset; // Geser pada sumbu z

      // Tambahkan koordinat ke array vertices
      vertices.push(x, y, z);

      // Hitung vektor normal (sama dengan vektor posisi dalam kasus bola)
      normals.push(x, y, z);

      // Hitung koordinat UV (gunakan koordinat bola untuk sederhana)
      const u = j / detail;
      const v = i / (detail / 2);
      uvs.push(u, v);

      // Buat indeks segitiga
      if (i < detail / 2 && j < detail) {
        const a = i * (detail + 1) + j;
        const b = a + 1;
        const c = a + detail + 1;
        const d = c + 1;
        indices.push(a, b, c, c, b, d);
      }
    }
  }

  // Set indices and attributes
  geometry.setIndex(indices);
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

  return geometry;
}



  
  export default function Bola() {
    const geometry = createGeometry();
    const portalMaterial = useRef();
      // Material dengan mode wireframe
    const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  
    useFrame((state, delta) => {
      portalMaterial.current.uTime += delta;
    });
  
    return (

      
      <mesh geometry={geometry}   >
         <portalMaterial ref={portalMaterial} /> 
      </mesh>

    

    );
  }

  
  