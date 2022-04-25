import React, { useEffect } from "react"
import { useStore } from "../store/store"
import { Text } from "@react-three/drei"

type Props = {}

const CompleteView = () => {
  const { endGame, setPlayers } = useStore()
  const handleRestart = () => {
    setPlayers([])
    endGame()
  }
  return (
    <group>
      <Text color="red" anchorX="center" anchorY="middle" position={[0, 0, 0]} fontSize={0.15}>
        Game over!
      </Text>
      <Text color="blue" anchorX="center" anchorY="middle" position={[0, -1, 0]} fontSize={0.15} onClick={handleRestart}>
        Restart
      </Text>
    </group>
  )
}

const CompleteScreen = (props: Props) => {
  const { players, setTimeEnd } = useStore()
  // Check if all players done
  // Ideally if all players = true, game done
  // If one player is false, it means game isn't done
  const gameDone = players.reduce((complete, player) => player.completed, false)
  console.log("game done", gameDone, players)

  useEffect(() => {
    if (gameDone) setTimeEnd(new Date())
  }, [gameDone, setTimeEnd])

  // If so, show win screen + restart button
  return gameDone ? <CompleteView /> : <></>
}

export default CompleteScreen
