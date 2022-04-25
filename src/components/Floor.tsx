import React, { useRef } from "react"
import type { PlaneProps } from "@react-three/cannon"
import { usePlane } from "@react-three/cannon"
import { Mesh } from "three"

function Floor({ onCollide, position = [0, 0, 0] }: PlaneProps) {
  const [ref] = usePlane(() => ({ isTrigger: true, onCollide, position, rotation: [-Math.PI / 2, 0, 0] }), useRef<Mesh>(null))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
      <meshBasicMaterial
        attach="material"
        color={"red"}
        //opacity={0}
        //transparent
      />
    </mesh>
  )
}

export default Floor
