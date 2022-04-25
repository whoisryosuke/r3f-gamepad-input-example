export interface Player {
  name: string
  // Have they completed level?
  completed: boolean
  // What time did they complete level?
  timeCompleted?: Date
  // Color of marble
  color: string
}

export type Triplet = [x: number, y: number, z: number]
export type Quad = [x: number, y: number, z: number, w: number]