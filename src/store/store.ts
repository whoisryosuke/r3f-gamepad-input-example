import { Triplet } from "@react-three/cannon"
import { Mesh } from "three"
import create from "zustand"
import { devtools, persist } from "zustand/middleware"
import { Player } from "./types"

export interface GameState {
  // Core game state
  // Game started/ended
  gameRunning: boolean
  startGame: () => void
  endGame: () => void

  // Game time
  timeStart?: Date
  timeEnd?: Date
  setTimeStart: (time: Date) => void
  setTimeEnd: (time: Date) => void

  // Players
  players: Player[]
  setPlayers: (players: Player[]) => void
  addPlayer: (player: Player) => void
  updatePlayer: (player: Player) => void

  // Player state
  playerPosition: Mesh["position"] | Triplet
  setPlayerPosition: (position: Mesh["position"] | Triplet) => void
}

export const useStore = create<GameState>()(
  devtools(
    persist((set) => ({
      // Game started/ended
      gameRunning: false,
      startGame: () => set((state) => ({ gameRunning: true })),
      endGame: () => set((state) => ({ gameRunning: false })),

      // Game time
      setTimeStart: (timeStart) => set((state) => ({ timeStart })),
      setTimeEnd: (timeEnd) => set((state) => ({ timeEnd })),

      // Players
      players: [],
      setPlayers: (players) => set((state) => ({ players })),
      addPlayer: (player) => set((state) => ({ players: [...state.players, player] })),
      updatePlayer: (modifiedPlayer) =>
        set((state) => ({ players: [...state.players.map((player) => (player.name === modifiedPlayer.name ? modifiedPlayer : player))] })),

      // Player state
      playerPosition: [0, 0, 0],
      setPlayerPosition: (playerPosition) => set((state) => ({ playerPosition }))

      // increase: (by) => set((state) => ({ bears: state.bears + by })),
    }))
  )
)
