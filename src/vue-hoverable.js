import merge from 'lodash.merge';

export default {
  name: 'Hoverable',

  data: () => ({
    hover: false
  }),

  render() {
    const [vnode] = this.$scopedSlots.on({
      hover: this.hover
    });

    merge(vnode.data.on, {
      mouseenter: () => this.hover = true,
      mouseleave: () => this.hover = false
    });

    return vnode;
  }
}