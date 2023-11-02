import { shaderMaterial, useTexture, useGLTF} from '@react-three/drei'
//import glsl from 'vite-plugin-glsl'



import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
//console.log(portalVertexShader)
console.log(portalFragmentShader)

import * as THREE from 'three'
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


export default function Feel_it()
{
    /*
    const model = useGLTF('./model/portal.glb')
    //console.log(model)

    console.log(model.nodes)
    */   
   
    const { nodes } = useGLTF('./model/portal.glb')
    //console.log(nodes)

    const bakedTexture = useTexture('./model/baked.jpg')
    //console.log(bakedTexture)
    bakedTexture.flipY = false

    // ...

    const portalMaterial = useRef()

    useFrame((state, delta) =>
    {
        portalMaterial.current.uTime += delta
    })

    return <>

  
            <mesh 
            geometry={ nodes.baked.geometry }
            
            position={ [ 0.0, 0.0, 5.0 ] }
            >

                <meshBasicMaterial map={ bakedTexture } />
                
            </mesh>

            <mesh geometry={ nodes.poleLightA.geometry }  position={ nodes.poleLightA.position } />
            <mesh geometry={ nodes.poleLightB.geometry } position={ [-0.645, 1.065, 5.228]}>
                <meshBasicMaterial color="#ffffe5" />
            </mesh>

            <mesh geometry={ nodes.portalLight.geometry } position={ [0.0, 0.85, 3.15] }  rotation={ nodes.portalLight.rotation }>

                    {/*
                     <shaderMaterial 
                            vertexShader={ portalVertexShader }
                            fragmentShader={ portalFragmentShader }
                            uniforms={ {
                                uTime: { value: 0 },
                                uColorStart: { value: new THREE.Color('#ffffff') },
                                uColorEnd: { value: new THREE.Color('#000000') }
                            } }
                     
                     />
                        */}

                        <portalMaterial  ref={ portalMaterial } />

           
            </mesh>

           

</>
}