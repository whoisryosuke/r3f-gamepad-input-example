import { createJoymap, createQueryModule, Joymap, QueryModule } from "joymap"
import { useStore } from "../store/store"

// Helper method for creating "registering" a gamepad with Joymap
// A gamepad = query module
function setupModule(joymap: Joymap, padId: string) {
  const m = createQueryModule({ padId })
  joymap.addModule(m)
}

// Initial joymap setup
// We basically use the onPoll property to constantly
// check for new gamepads and any of their input
const joymap = createJoymap({
  onPoll() {
    const unusedIds = joymap.getUnusedPadIds()

    if (unusedIds.length > 0) {
      unusedIds.forEach((padId) => setupModule(joymap, padId))
    }

    const gamepads = joymap.getModules() as QueryModule[]

    const store = useStore.getState()
    const { playerPosition, setPlayerPosition } = store

    // Go through each connected gamepad and check for input
    gamepads.forEach((module) => {
      // Directional Navigation
      if (module.getButton("dpadUp").pressed) {
        console.log("dpadUp pressed", true)
        // Set the player position in the Zustand store
        // This syncs with any React component using the store state (see: Game.tsx)
        setPlayerPosition([playerPosition[0], playerPosition[1] + 0.1, playerPosition[2]])

        // You could also just set state directly
        // useStore.setState((state) => ({}))
      }
      if (module.getButton("dpadDown").pressed) {
        console.log("dpadDown pressed", true)
        setPlayerPosition([playerPosition[0], playerPosition[1] - 0.1, playerPosition[2]])
      }
      if (module.getButton("dpadLeft").pressed) {
        console.log("dpadLeft pressed", true)
        setPlayerPosition([playerPosition[0] - 0.1, playerPosition[1], playerPosition[2]])
      }
      if (module.getButton("dpadRight").pressed) {
        console.log("dpadRight pressed", true)
        setPlayerPosition([playerPosition[0] + 0.1, playerPosition[1], playerPosition[2]])
      }

      // Face Buttons
      if (module.getButton("start").pressed) {
        console.log("start pressed", true)
        console.log("reset player position", true)
        setPlayerPosition([0, 0, 0])
      }
    })
  }
})

// Start joymap polling
joymap.start()

// Ideally we'd have some sort of end of the app lifecycle?
// joymap.stop()

// We export the joymap in case we want to use it anywhere else
export { joymap }
