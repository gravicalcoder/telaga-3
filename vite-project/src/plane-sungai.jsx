//basic

/*
import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function  PlaneComponent(){
  // Definisikan vertices, indices, normals, dan uvs
  const width = 15;
  const height = 15;
  const segmentsX = 30;
  const segmentsY = 30;

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
      position={[-11, 3, 8]} 
      material={wireframeMaterial}
    />
  );
};
*/


/*

import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function Plane_Sungai() {
  const width = 15;
  const height = 15;
  const segmentsX = 30;
  const segmentsY = 30;

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * width - width / 2;

      // Menggunakan nilai x yang berkisar dari -2 hingga 2 sesuai dengan sin(x^2)
      const yPos = v * height - height / 2;
      const zPos = Math.sin(xPos * xPos); // Menggunakan z = sin(x^2) untuk lengkungan

      vertices.push(xPos, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh
      geometry={geometry}
      rotation-x={-Math.PI / 2}
      position={[-12, 5, 8]}
      material={wireframeMaterial}
    />
  );
}

*/

//satu lengkungan besar
/*
import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 15;
  const height = 15;
  const segmentsX = 30;
  const segmentsY = 30;

  const radius = height / 2; // Radius setengah silinder
  const centerX = width / 2; // Posisi pusat setengah silinder

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * width;
      const yPos = v * height - height / 2;

      // Menghitung posisi z untuk membentuk alur setengah silinder
      const zPos = radius * Math.sin((xPos / width) * Math.PI);

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh
      geometry={geometry}
      rotation-x={-Math.PI / 2}
      position={[-11, 3, 8]}
      material={wireframeMaterial}
    />
  );
}

*/

// masih kegedean
/*
import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 15;
  const height = 15;
  const segmentsX = 30;
  const segmentsY = 30;

  const radius = width / 3; // Radius setengah silinder (sepertiga lebar plane)
  const centerX = width / 2; // Posisi pusat setengah silinder

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * width;
      const yPos = v * height - height / 2;

      // Menghitung posisi z untuk membentuk alur setengah silinder
      const zPos = radius * Math.sin((xPos / width) * Math.PI);

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh
      geometry={geometry}
      rotation-x={-Math.PI / 2}
      position={[-11, 3, 8]}
      material={wireframeMaterial}
    />
  );
}
*/

// lengkungan ditengah  mekipun belum nyambung

/*
import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 15;
  const height = 15;
  const segmentsX = 30;
  const segmentsY = 30;

  const sectionWidth = width / 3; // Lebar setiap bagian plane
  const radius = sectionWidth / 2; // Radius setengah silinder (sepertiga lebar plane)
  const centerX = sectionWidth / 2; // Posisi pusat setengah silinder
  const startZ = -sectionWidth / 2; // Posisi awal z (setelah sepertiga plane)
  const endZ = sectionWidth / 2; // Posisi akhir z (sebelum sepertiga plane)

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  // Bagian Pertama: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Kedua: Alur selebar sepertiga lebar plane (memanjang sejajar sumbu z)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + sectionWidth;
      const yPos = v * height - height / 2;

      // Menghitung posisi z untuk membentuk alur setengah silinder
      const progress = xPos / (2 * sectionWidth); // Kemajuan dari kiri ke kanan (0 hingga 1)
      const zPos = startZ + (endZ - startZ) * Math.sin(progress * Math.PI);

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Ketiga: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + 2 * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + 2 * (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh
      geometry={geometry}
      rotation-x={-Math.PI / 2}
      position={[-11, 3, 8]}
      material={wireframeMaterial}
    />
  );
}

*/


//  udah nyambung hanya pertengahan kurva turun

/*
import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 15;
  const height = 15;
  const segmentsX = 30;
  const segmentsY = 30;

  const sectionWidth = width / 3; // Lebar setiap bagian plane
  const centerX = sectionWidth / 2; // Posisi pusat setengah silinder
  const radius = height / 2; // Radius setengah silinder

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  // Bagian Pertama: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Kedua: Alur setengah silinder (memanjang sejajar sumbu z)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + sectionWidth;
      const yPos = v * height - height / 2;

      // Menghitung posisi z untuk membentuk alur setengah silinder
      const zPos = radius * Math.sin((u * Math.PI) * 2); // Periode dua kali lipat dari kode sebelumnya

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Ketiga: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + 2 * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + 2 * (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh
      geometry={geometry}
      rotation-x={-Math.PI / 2}
      position={[-11, 3, 8]}
      material={wireframeMaterial}
    />
  );
}

*/

/*
import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 15;
  const height = 15;
  const segmentsX = 30;
  const segmentsY = 30;

  const sectionWidth = width / 3; // Lebar setiap bagian plane
  const centerX = sectionWidth / 2; // Posisi pusat setengah silinder
  const radius = height / 2; // Radius setengah silinder

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  // Bagian Pertama: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Kedua: Alur setengah silinder (memanjang sejajar sumbu z)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + sectionWidth;
      const yPos = v * height - height / 2;

      // Menghitung posisi z untuk membentuk setengah silinder
      const progress = xPos / (2 * sectionWidth); // Kemajuan dari kiri ke kanan (0 hingga 1)
      const zPos = radius * Math.sin(progress * Math.PI); // Menggunakan sin dari kemajuan

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Ketiga: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + 2 * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + 2 * (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh
      geometry={geometry}
      rotation-x={-Math.PI / 2}
      position={[-11, 3, 8]}
      material={wireframeMaterial}
    />
  );
}

*/

// sudah pas ukuran alurnya hanya masih tajam

import React from 'react';
import { BufferGeometry, BufferAttribute, MeshBasicMaterial } from 'three';
import { Canvas } from '@react-three/fiber';

export default function PlaneComponent() {
  const width = 10;
  const height = 10;
  const segmentsX = 20;
  const segmentsY = 20;

  const sectionWidth = width / 3; // Lebar setiap bagian plane
  const centerX = sectionWidth / 2; // Posisi pusat setengah silinder
  const radius = height / 2; // Radius setengah silinder

  const vertices = [];
  const indices = [];
  const normals = [];
  const uvs = [];

  // Bagian Pertama: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Kedua: Alur setengah silinder (memanjang sejajar sumbu z)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + sectionWidth;
      const yPos = v * height - height / 2;

      // Menghitung posisi z untuk membentuk setengah silinder
      const progress = xPos / sectionWidth; // Kemajuan dari kiri ke kanan (0 hingga 1)
      const zPos = radius * Math.sin(progress * Math.PI) *0.2; // Menggunakan sin dari kemajuan

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  // Bagian Ketiga: Permukaan Rata Sejajar bidang xz (sepanjang sepertiga dari lebar plane)
  for (let y = 0; y <= segmentsY; y++) {
    for (let x = 0; x <= segmentsX; x++) {
      const u = x / segmentsX;
      const v = y / segmentsY;
      const xPos = u * sectionWidth + 2 * sectionWidth;
      const yPos = v * height - height / 2;
      const zPos = 0;

      vertices.push(xPos - centerX, yPos, zPos);
      normals.push(0, 0, 1);
      uvs.push(u, v);

      if (x < segmentsX && y < segmentsY) {
        const vertexIndex = x + y * (segmentsX + 1) + 2 * (segmentsX + 1) * (segmentsY + 1);
        indices.push(vertexIndex, vertexIndex + 1, vertexIndex + segmentsX + 1);
        indices.push(vertexIndex + segmentsX + 1, vertexIndex + 1, vertexIndex + segmentsX + 2);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
  geometry.setAttribute('normal', new BufferAttribute(new Float32Array(normals), 3));
  geometry.setAttribute('uv', new BufferAttribute(new Float32Array(uvs), 2));

  const wireframeMaterial = new MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  return (
    <mesh
      geometry={geometry}
      rotation-x={-Math.PI / 2}
      position={[-26, 3, 8]}
      material={wireframeMaterial}
    />
  );
}







