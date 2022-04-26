# R3F Gamepad Input Example

Basic example of using gamepad input from [joymap](https://github.com/diegodoumecq/joymap) in a [R3F](https://github.com/pmndrs/react-three-fiber) app (or any React app really) using an external store ([Zustand](https://github.com/pmndrs/zustand) here, but could be Redux, Jotai, etc) for handling updates between React components.

This example shows a box moving based on gamepad input.

> This requires a gamepad online and connected. Pressing a button with app window active should register controller. Press Start button (PS4) to reset position of box.

This is an alternative to placing the gamepad input inside React directly (and also using a store), which can have performance drawbacks. [Here’s a (broken) example of that.](https://codesandbox.io/s/r3f-rpg-prototype-1-gamepad-input-in-render-ktuozq)

## Development

1. Clone it
2. Yarn it
3. Bop it
