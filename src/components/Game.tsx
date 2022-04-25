import React from "react"
import { useStore } from "../store/store"
import Player from "./Player"

type Props = {}

const Game = (props: Props) => {
  const { playerPosition } = useStore()

  return (
    <>
      <Player position={playerPosition} />
    </>
  )
}

export default Game
