import {  useGLTF  } from '@react-three/drei'


export default function Alur()
{
   
    const alur = useGLTF('./model/alur.gltf')

    //console.log(alur)


   


  
    return <>
  
                    <primitive 
                        object={ alur.scene } 
                        scale={30.1}
                        position={ [ 0.0, 5.0, 0.0 ] }
                        rotation-x={-Math.PI/2 }
                        //rotation-Y={Math.PI/2 }

                     />

                

                    
    </>
}