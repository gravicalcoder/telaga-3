/*
import { Physics } from '@react-three/rapier'
import useGame from './stores/useGame.jsx'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
*/
import * as THREE from 'three';

import { Color,  Vector2, Raycaster  } from 'three'; // Import Color dari Three.js

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { useThree, extend, useFrame } from '@react-three/fiber'

extend({ OrbitControls })

import { useEffect, useRef } from 'react'

import {PlaneGeometry, MeshBasicMaterial, Mesh, BufferGeometry, BufferAttribute } from 'three';

import { ThirdTorus } from 'three/src/geometries/ThirdTorus'

//import * as THREEP from 'three@0.125.0';

//import TargetMesh from './target-mesh.jsx';

function TargetGeometry() {
  // Create a PlaneGeometry
 // const geometry = new PlaneGeometry(5, 5);

  
  const geometry = new BufferGeometry();

  console.log(geometry)

    // Define vertices and indices
    // vertices dan indices yang nerubah titik-titik jadi plane
    /*
    const vertices = new Float32Array([
      -1.0, -1.0, 1.0, // v0
      1.0, -1.0, 1.0, // v1
      1.0, 1.0, 1.0, // v2
      -1.0, 1.0, 1.0, // v3
    ]);
  
    const indices = [0, 1, 2, 2, 3, 0];
    */
    

    // vertices dan indices yang nerubah titik-titik jadi box
    
    const vertices = new Float32Array([
      -0.5, -1, -2.5,
      -0.5, -1, 2.5,
      -0.5, 1, -2.5,
      -0.5, 1, 2.5,
      0.5, -1, -2.5,
      0.5, 1, -2.5,
      0.5, -1, 2.5,
      0.5, 1, 2.5,
      -0.5, -1, -2.5,
      0.5, -1, -2.5,
      -0.5, -1, 2.5,
      0.5, -1, 2.5,
      -0.5, 1, -2.5,
      -0.5, 1, 2.5,
      0.5, 1, -2.5,
      0.5, 1, 2.5,
      -0.5, -1, -2.5,
      -0.5, 1, -2.5,
      0.5, -1, -2.5,
      0.5, 1, -2.5,
      -0.5, -1, 2.5,
      0.5, -1, 2.5,
      -0.5, 1, 2.5,
      0.5, 1, 2.5
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

    

    /*
    const halfSize = 7.5 /2; // Setengah dari panjang sisi kotak

    const vertices = new Float32Array([
        -halfSize, -halfSize, -halfSize,
        -halfSize, -halfSize, halfSize,
        -halfSize, halfSize, -halfSize,
        -halfSize, halfSize, halfSize,
        halfSize, -halfSize, -halfSize,
        halfSize, halfSize, -halfSize,
        halfSize, -halfSize, halfSize,
        halfSize, halfSize, halfSize,
    ]);
*/

/*
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
  
  */  
  


    

    // Set indices and position attributes
    geometry.setIndex(indices);
    geometry.setAttribute("position", new BufferAttribute(vertices, 3));

    

  /*

    // Memodifikasi vertices
    for (let vertex of geometry.vertices) {
      vertex.z = -vertex.y;
      vertex.y = 0;
    }
*/
         // Membuat target mesh
         /*
  const targetmesh = (
    <mesh geometry={targetgeometry}>
      <meshBasicMaterial attach="material" color="blue" />
    </mesh>
  );

  return <>{targetmesh}</>
*/
      
  // Create a material for the geometry (e.g., MeshBasicMaterial)
  //const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const material = new MeshBasicMaterial({ color: "blue", wireframe:true} );

  // Create a mesh using the geometry and material
  const mesh = new Mesh(geometry, material);

  return <primitive object={mesh}  wireframe="true" />;
  

}


//const raycaster = useRef(new Raycaster());
//const mouse = new Vector2();

//const mouse = useRef(new Vector2());


export default function App() {
 // const [count, setCount] = useState(0)

  /*
  const width = canvas.width;
  const height = canvas.height;
*/

    // Colors
const black = new Color('black');
const white = new Color('white');

const { camera, gl } = useThree()

  const width = 2;
  const height = 2; 

  
  //const targetgeometry = new THREE.PlaneGeometry(5, 5);

  
    return <>

      <orbitControls args={ [ camera, gl.domElement ] } />
    <mesh  position={[0, 3, 0]}>
        <torusKnotGeometry />
        <meshBasicMaterial color="mediumpurple" wireframe="false" />
    </mesh>

    <mesh  position={[0, -3, 0]}>
        <torusGeometry  args={[1, 0.4, 70, 64, 1.8]} />
        <meshBasicMaterial color="mediumpurple" wireframe="true"    />
    </mesh>

    <mesh  position={[4, -3, 0]}>
        <torusGeometry args={[1, .4, 12, 64, 1.8]} />
        <meshBasicMaterial color="green" wireframe="true"  side={THREE.DoubleSide}  />
    </mesh>

         <TargetGeometry />  

         {/*<TargetMesh /> */}
      </>


  
}
