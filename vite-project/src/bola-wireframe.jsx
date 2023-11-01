import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';



function createGeometry() {
  // Kode geometri bola tetap sama seperti sebelumnya
  const geometry = new THREE.BufferGeometry();
  
    const detail = 10; // Tingkat detail permukaan bola (banyaknya segmen lingkaran)
    const radius = 1; // Radius bola
    const zOffset = 5; // Jarak geser pada sumbu z
  
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







export default function Bola_wireframe() {
  const geometry = createGeometry();

  // Material dengan mode wireframe
  const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh 
    geometry={geometry}
     material={wireframeMaterial}
     position={[-5, 0, 0]}
     >
      {/* Tidak perlu menggunakan useRef dan useFrame karena bola tidak bergerak */}
    </mesh>
  );
}
