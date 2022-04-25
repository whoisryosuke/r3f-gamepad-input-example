import React, { useState } from "react"
import { useStore } from "../store/store"

type Props = {}

const PlayerSelect = (props: Props) => {
  const [text, setText] = useState("Ryo\nArthur\nToshi\n")
  const { players, setPlayers, startGame, setTimeStart } = useStore()

  const handleStart = () => {
    // Parse text
    // Each line break = new player
    // console.log(text.split("\n").filter(Boolean));
    const names = text.split("\n").filter(Boolean)

    // Create players
    if (names.length > 0) {
      const newPlayers = names.map((name) => ({
        name,
        completed: false,
        timeCompleted: null,
        color: "blue"
      }))
      setPlayers(newPlayers)
      startGame()
      setTimeStart(new Date())
    }
  }

  const handleText = (e) => {
    setText(e.target.value)
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <textarea value={text} onChange={handleText} style={{ height: "300px" }}></textarea>
      <button onClick={handleStart}>Start Game</button>
    </div>
  )
}

export default PlayerSelect
