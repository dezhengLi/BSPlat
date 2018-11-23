<template>
  <svg :class="className" aria-hidden="true" class="svg-icon">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
const SvgIcon = {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    }
  }
}
SvgIcon.install = function (Vue) {
  Vue.component(SvgIcon.name, SvgIcon)
}
export default SvgIcon
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
