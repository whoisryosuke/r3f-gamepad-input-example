import React from "react"
import { useStore } from "../store/store"
import { Text } from "@react-three/drei"
import { Mesh } from "three"

const TEXT_GAP = -0.2

type Props = {
  position: Mesh["position"]
}

const PlayerList = ({ position }: Props) => {
  const { players, timeStart } = useStore()
  const timeStartParsed = new Date(timeStart)
  console.log("players", players)
  console.log("timeStart", timeStartParsed)
  return (
    <group position={position}>
      <Text color="black" anchorX="center" anchorY="middle" position={[0, 0, 0]} fontSize={0.15}>
        Players
      </Text>
      {players.map((player, index) => {
        const playerTime = new Date(player.timeCompleted)
        const timeComplete = player.completed && timeStartParsed.getTime() - playerTime.getTime()
        return (
          <group key={player.name} position={[0, TEXT_GAP * (index + 1), 0]}>
            <Text color="black" anchorX="center" anchorY="middle">
              {player.name}
            </Text>
            {player.completed && (
              <Text color="black" anchorX="center" anchorY="middle" position={[0.4, 0, 0]}>
                {timeComplete / 1000}
              </Text>
            )}
          </group>
        )
      })}
    </group>
  )
}

export default PlayerList
