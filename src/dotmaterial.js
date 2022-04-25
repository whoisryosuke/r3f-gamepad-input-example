import * as THREE from "three"
import { extend } from "@react-three/fiber"

class DotMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      transparent: true,
      uniforms: {
        time: { value: 1 },
        map: {
          type: "t",
          value: undefined
          // value: THREE.ImageUtils.loadTexture("texture_06.png")
        }
      },
      vertexShader: `uniform float time;
      attribute float size;
      attribute vec3 color;
      varying lowp vec3 vColor;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
        gl_PointSize = size;
        vColor = color;
        vUv = uv;
      }`,
      fragmentShader: `uniform float time;
      uniform sampler2D map;
      varying lowp vec3 vColor;
      varying vec2 vUv;
      void main() {
        vec4 texture = texture2D(map, vUv);
        gl_FragColor = vec4(vUv, 0, 1.0) + texture;
      }`
    })
  }
}

extend({ DotMaterial })
