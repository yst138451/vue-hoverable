# vue-hoverable
Lightweight Vue utility for listening to mouse hover (`mouseenter` and `mouseleave`).

## Installation
```bash
npm install @yst/vue-hoverable
```

Import and install it as plugin:

```js
import Vue from 'vue';
import Hoverable from '@yst/vue-hoverable';

Vue.use(Hoverable);
```

## Options
### Scoped slots
#### Name
`on`  

#### Description  
Provides an info of the current mouse state ("entering" or "leaving").

#### Props
```js
{
  hover: boolean
}
```

## Usage
It doesn't wrap the target element/component with another element, because these mouse events are attached directly to the target.

```html
<hoverable #on="{ hover }">
  <button :style="{ backgroundColor: hover ? 'green' : 'blue' }">
    Click me
  </button>
</hoverable>
```

## License
[MIT](http://opensource.org/licenses/MIT)