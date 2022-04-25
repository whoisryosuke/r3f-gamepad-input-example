import React, { useEffect, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"
import { OrbitControls, useTexture } from "@react-three/drei"
import "./dotmaterial"
import Game from "./components/Game"
import PlayerSelect from "./components/PlayerSelect"
import { useStore } from "./store/store"
// Just importing this is enough - don't need to use it
import GamepadInput from "./modules/gamepad"
import { joymap } from "./modules/gamepad"

function CustomVertexObject() {
  const { colorMap } = useTexture({ map: "texture_06.png" })
  const vertices = new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0])
  const colors = new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0])
  const uv = new Float32Array([0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0])
  // const geom = useRef()
  // useFrame((state) => {
  //   geom.current.material.uniforms.time.value = state.clock.getElapsedTime()
  //   geom.current.geometry.verticesNeedUpdate = true
  // })

  return (
    <mesh visible userData={{ hello: "world" }} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <bufferGeometry position={[0, 0, 0]} args={[1, 16, 16]} onUpdate={(self) => self.computeVertexNormals()}>
        <bufferAttribute attachObject={["attributes", "position"]} count={vertices.length / 3} array={vertices} itemSize={3} />
        <bufferAttribute attachObject={["attributes", "color"]} array={colors} itemSize={3} count={6} />
        <bufferAttribute attachObject={["attributes", "uv"]} array={uv} itemSize={2} count={6} />
      </bufferGeometry>
      {/* <meshNormalMaterial /> */}
      <dotMaterial map={colorMap} />
    </mesh>
  )
}

export default function App() {
  const gameStarted = useStore((state) => state.gameRunning)

  useEffect(() => {
    return () => {
      joymap.stop()
    }
  }, [])
  return (
    <>
      <Canvas pixelRatio={[1, 2]} camera={{ position: [0, 0, 3] }} style={{ height: "90vh" }}>
        <color attach="background" args={["#202025"]} />
        {/* <Suspense fallback={<mesh></mesh>}>
        <CustomVertexObject />
      </Suspense> */}
        <Game />
        <OrbitControls />
      </Canvas>
    </>
  )
}
