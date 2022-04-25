import { createJoymap, createQueryModule, QueryModule } from "joymap"

const joymap = createJoymap()

// Only 1 player for now - but add more here
const players = Array(1)
  .fill(0)
  .map((player, index) => {
    const module = createQueryModule()
    joymap.addModule(module)

    return {
      name: index,
      module
    }
  })

export { players, joymap }
