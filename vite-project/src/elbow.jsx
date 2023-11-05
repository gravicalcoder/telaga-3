import {  useGLTF  } from '@react-three/drei'


export default function Elbow()
{
   

    const elbow = useGLTF('./model/elbow.gltf')

   // console.log(alur)

   


  
    return <>
  
             

                    <primitive 
                        object={ elbow.scene } 
                        scale={30.1}
                        position={ [ 0.0, 5.0, 2.29 ] }
                        rotation-x={-Math.PI/2 }
                        rotation-z={Math.PI/2 }

                     />

                    
    </>
}