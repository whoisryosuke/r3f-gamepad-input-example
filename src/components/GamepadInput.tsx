import React, { useCallback, useEffect, useState } from "react"
import { useStore } from "../store/store"
import { joymap, players } from "../utils/gamepad"

type Props = {}

// Component that checks for gamepad input and updates Zustand store
const GamepadInput = (props: Props) => {
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  const { playerPosition, setPlayerPosition } = useStore()

  useEffect(() => {
    joymap.setOnPoll(forceUpdate)
    joymap.start()

    return () => {
      joymap.stop()
    }
  }, [])

  // This just doesn't work
  // useEffect(() => {
  //   const gamepad = players[0].module

  //   // Gamepad exists? Lets use the input
  //   if (gamepad && gamepad.getPadId()) {
  //     console.log("getButton" in gamepad)
  //     // Movement input
  //     if (gamepad.getButton("dpadUp").pressed) {
  //       console.log("dpad pressed up!")
  //       setPlayerPosition([playerPosition[0], playerPosition[1] + 0.1, playerPosition[2]])
  //     }
  //     if (gamepad.getButton("dpadDown").pressed) {
  //       setPlayerPosition([playerPosition[0], playerPosition[1] - 0.1, playerPosition[2]])
  //     }
  //   }
  // }, [playerPosition, setPlayerPosition])

  // Breaks React due to infinite re-render
  const gamepad = players[0].module

  // Gamepad exists? Lets use the input
  if (gamepad && gamepad.getPadId()) {
    console.log("getButton" in gamepad)
    // Movement input
    if (gamepad.getButton("dpadUp").pressed) {
      console.log("dpad pressed up!")
      setPlayerPosition([playerPosition[0], playerPosition[1] + 0.1, playerPosition[2]])
    }
    if (gamepad.getButton("dpadDown").pressed) {
      setPlayerPosition([playerPosition[0], playerPosition[1] - 0.1, playerPosition[2]])
    }
  }

  // Debug
  // if (players[0].module.getPadId()) console.log("is pressed?", pressed)

  return <></>
}

export default GamepadInput
