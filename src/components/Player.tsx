import React from "react"
import { useBox } from "@react-three/cannon"
import { Mesh } from "three"

const BOX_SCALE = 0.075

type Props = {
  position: Mesh["position"]
  color?: string
  name?: string
}

const Player = ({ name = "Player", position = [1, 5, 0], color = "blue" }: Props) => {
  return (
    <mesh name={name} scale={[BOX_SCALE, BOX_SCALE * 1.5, BOX_SCALE]} position={position}>
      <boxGeometry />
      <meshBasicMaterial attach="material" color={color} opacity={1} />
    </mesh>
  )
}

export default Player
