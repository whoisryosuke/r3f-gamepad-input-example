import React from "react"
import { Mesh } from "three"
import { useStore } from "../store/store"
import getRandomInt from "../utils/random"
import Marble from "./Marble"

const MARBLE_TOP = 5
const MARBLE_GAP = 0.05

type Props = {
  position: Mesh["position"]
}

const Marbles = ({ position }: Props) => {
  const players = useStore((state) => state.players)

  return (
    <group position={position}>
      {players.map(
        (player, index) =>
          !player.completed && (
            <Marble
              key={player.name}
              name={player.name}
              mass={0.1 * (getRandomInt(3) + 1 * 0.5)}
              position={[0, MARBLE_TOP, index * MARBLE_GAP]}
              color={player.color}
            />
          )
      )}
    </group>
  )
}

export default Marbles
