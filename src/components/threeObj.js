import React, { useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"

const Box = props => {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh {...props} ref={mesh} scale={[2, 2, 2]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  )
}

const ThreeObj = () => (
  <div>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  </div>
)

export default ThreeObj
