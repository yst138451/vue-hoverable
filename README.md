# vue-hoverable
Lightweight Vue utility for listening to mouse hover (`mouseenter` and `mouseleave`).

## Installation

#### NPM
```bash
$ npm install @yst/vue-hoverable
```

#### Yarn
```bash
$ yarn add @yst/vue-hoverable
```

Import and install it as plugin:

```js
import Vue from 'vue';
import Hoverable from '@yst/vue-hoverable';

Vue.use(Hoverable);
```

## Options

### Scoped slots

#### `on.hover`  
- type: `boolean`

Provides an info of the current mouse state ("entering" or "leaving").


## Usage
It doesn't wrap the target element/component with another one, because these mouse events are attached directly onto the target. So in the following case, the button will have mouse-hover and click handlers attached to it. 

```html
<hoverable #on="{ hover }">
  <button 
    :style="{ backgroundColor: hover ? 'green' : 'blue' }"
    @click="handleClick">
    Click me
  </button>
</hoverable>
```