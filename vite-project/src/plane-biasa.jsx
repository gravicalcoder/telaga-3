
/*
import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function  PlaneComponent(){
  // Definisikan vertices, indices, normals, dan uvs
  const width = 5;
  const height = 5;
  const segmentsX = 10;
  const segmentsY = 10;

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * width - width / 2;
      const yPos = v * height - height / 2;

      vertices.push(xPos, yPos, 0);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Buat geometri menggunakan vertices, indices, normals, dan uvs
  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  // Material dengan mode wireframe
  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh 
      geometry={geometry} 
      rotation-x={-Math.PI / 2} 
      position={[8, 3, 8]} 
      material={wireframeMaterial}
    />
  );
};

*/


// gelombangnya masih acak
/*
import React, {  useCallback, useMemo } from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function GelombangPlane() {
  const width = 50;
  const height = 50;
  const segmentsX = 100;
  const segmentsY = 100;

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  let t =0;
  let frequency = 10.5; // Frekuensi gelombang
  let amplitude = 0.3; // Amplitudo gelombang

  const graph = useCallback((x, z) => {
    return Math.sin(frequency  * (x ** 2 + z ** 2 + t)) * amplitude;
  }, [t, frequency, amplitude])

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      let xPos = u * width - width / 2;

      //const yPos = amplitude * Math.sin(frequency * u * Math.PI);  // gelombang lurus

      //  Math.sin(f * (x ** 2 + z ** 2 + t)) * a;

      let zPos = v * height - height / 2;
      
      //const yPos =  Math.sin(frequency * ((xPos**2) + (zPos**2)+t)) * amplitude ;  // gelombang acak

      let yPos = graph(xPos,zPos);


      

      vertices.push(xPos, yPos, zPos);
      normals.push(0, 1, 0); // Normal pada sumbu y (vertikal)
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

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
    <mesh geometry={geometry} rotation-x={Math.PI } position={[8, 0, 8]} material={wireframeMaterial} />
  );
}

*/

// dibawah ini gelombang ditengah

/*

import React, { useCallback, useMemo, useState } from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 50;
  const height = 50;
  const segmentsX = 300;
  const segmentsY = 300;
  const jarak =  width / segmentsX;
  

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  let t = 12;
  let frequency = 0.12; // Frekuensi gelombang
  let amplitude = 0.3; // Amplitudo gelombang

  const graph = useCallback((x, z) => {
    return Math.sin(frequency * (x ** 2 + z ** 2 + t)) * amplitude;
  }, [t, frequency, amplitude]);

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;

   

      //let x = sep * (xi - count / 2);
      //let z = sep * (zi - count / 2);
      const xPos = jarak * (y - segmentsY  / 2);
      const zPos = jarak * (x - segmentsX / 2);

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
    <mesh geometry={geometry} rotation-x={Math.PI} position={[8, 0, 8]} material={wireframeMaterial} />
  );
}

*/

// dibawah ini gelombang di pinggir 
/*
import React, { useCallback, useMemo, useRef  } from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 50;
  const height = 50;
  const segmentsX = 300;
  const segmentsY = 300;
  const jarak = width / segmentsX;

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  const bufferRef = useRef();

  let t = 20;
  let frequency = 0.09; // Frekuensi gelombang
  let amplitude = 0.5; // Amplitudo gelombang
  let xOffset = 15; // Pemindahan pusat gelombang sejauh 10 satuan pada sumbu x
  let zOffset = 10; // Pemindahan pusat gelombang sejauh 10 satuan pada sumbu z

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
    <mesh geometry={geometry} rotation-x={Math.PI} position={[8, 0, 8]} material={wireframeMaterial} />
  );
}

*/

// kode dibawah ini gelombang bergerak



import React, { useCallback, useMemo, useRef } from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export default function PlaneComponent() {
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
  let xOffset = 15; // Pemindahan pusat gelombang sejauh 15 satuan pada sumbu x
  let zOffset = 25; // Pemindahan pusat gelombang sejauh 10 satuan pada sumbu z

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
      const time = state.clock.getElapsedTime()
      //console.log(time)
     // t +=  Math.sin(time)

     t += -0.5;

     // console.log(bufferRef.current.geometry.attributes);

     

      console.log(bufferRef.current.geometry.attributes.position.array);

      const vertices = bufferRef.current.geometry.attributes.position.array
      //console.log(bufferRef.current.geometry.attributes.normal);
      //console.log(bufferRef.current.geometry.attributes.uv);

      let i = 0;
      for (let y = 0; y <= segmentsY; y++) {
        for (let x = 0; x <= segmentsX; x++) {
          const u = x / segmentsX;
          const v = y / segmentsY;
    
          const xPos = jarak * (y - segmentsY / 2) + jarak / 2; // Pindahkan gelombang ke pinggir plane
          const zPos = jarak * (x - segmentsX / 2) + jarak / 2; // Pindahkan gelombang ke pinggir plane
    
       
          vertices[i + 1] = graph(xPos, zPos);
          i += 3;
          /*
          normals.push(0, 1, 0);
          uvs.push(u, v);
    
          if (x < segmentsX && y < segmentsY) {
            const vertexIndex = x + y * (segmentsX + 1);
            indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
            indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
          }
          */


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
    <mesh geometry={geometry} rotation-x={Math.PI} position={[8, 0, -38]} material={wireframeMaterial} ref={bufferRef} />
  );
}



