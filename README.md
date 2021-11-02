# Robotavars
![Example Robot Avatar](https://github.com/christianblandford/Robotavar/blob/04f890239a1b0a6f0e98bd9bcbec4717fba060fe/robot_example.png?raw=true)

Dynically generated robot avatars for your website

# Installation

run `yarn add robotavar` or `npm install --save robotavar`

# Usage

```
import { Robotavar } from 'robotavar'

<Robotavar mouth="smile" head="default" antenna="snoo" clothes="Hoodie" fabricColor="Blue02" size={300} />

or

<Robotavar mouth="softSmile" head="longNeck" antenna="bender" clothes="GraphicShirt" fabricColor="White" graphic="Pizza" size={150} />
```

## Functions

To get a list of all head types, `import { headTypes } from 'robotavar'`, which returns an array of strings of all head types.

To get a list of all antenna types, `import { antennaeTypes } from 'robotavar'`, which returns an array of strings of all antenna/atennae types.

To get a list of all mouth types, `import { mouthTypes } from 'robotavar'`, which returns an array of strings of all mouth types.

## Options

### Heads

Types: ['default', 'longNeck', 'sharp']

### Antenna/Antennae

Types: ['default', 'snoo', 'shrek', 'bender', 'rabbitEars']

### Mouths

Types: ['default', 'softSmile', 'smile', 'concerned']

### Size

Provide the desired size of the svg in pixels as a prop. Ex: `<Robotavar size={175} ... />`

### Clothing

All clothing options come from the amazing [Avataaars](https://github.com/fangpenlin/avataaars) project. Note that values for the following props values must be capitalized, as that is how Avataaars requires them.

To specify the clothing type the robot will wear, pass the 'clothes' prop

Clothing color can be configured with the 'fabricColor' prop

Graphic tee graphics are specified with the 'graphics' prop
