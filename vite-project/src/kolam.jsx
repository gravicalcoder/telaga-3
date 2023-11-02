import * as THREE from 'three';
import { BufferGeometry, BufferAttribute, Matrix4 } from 'three';
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

  // Definisikan vertex dan indices untuk kotak pada bidang xy
  const vertices = new Float32Array([
    -1.0, 1.0, 0.0,  // v0
    -1.0, -1.0, 0.0, // v1
    1.0, -1.0, 0.0,  // v2
    1.0, 1.0, 0.0,   // v3
  ]);

  const indices = [0, 1, 2, 2, 3, 0];

  // Set indices dan atribut posisi
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(vertices, 3));

  const normals = [];
  const uvs = [];

  for (let i = 0; i < indices.length; i += 3) {
    // Hitung normal untuk permukaan datar (semua normal mengarah ke arah yang sama)
    const normal = new THREE.Vector3(0, 0, 1);

    normals.push(normal.x, normal.y, normal.z);

    // Hitung koordinat UV
    uvs.push(0, 0);
    uvs.push(1, 0);
    uvs.push(1, 1);
    uvs.push(0, 1);
  }

  // Atur atribut normal dan uv
  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));

  return geometry;
}

export default function Kotak() {
  const geometry = createGeometry();
  const portalMaterial = useRef();

  // Matriks rotasi 180 derajat sekitar sumbu x (π radians)
  const matrix = new THREE.Matrix4().makeRotationX(-Math.PI/2 );
  geometry.applyMatrix4(matrix);

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <mesh geometry={geometry} position={[-5, 0, 0]}> {/* Geser -5 pada sumbu x */}
      <portalMaterial ref={portalMaterial} />
    </mesh>
  );
}
