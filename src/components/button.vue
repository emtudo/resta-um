<template>
  <span
    v-if="disabled"
    class="bg-yellow-50 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
  </span>
  <span
    v-on:click="addSelect"
    v-else
    v-bind:class="bgClass"
    class="relative cursor-pointer inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    role="switch" aria-checked="false">
  </span>
</template>

<script>
import get from 'lodash-es/get'

export default {
  name: "button-one",
  props: {
    currentSelect: {
      type: Object,
      required: true
    },
    empty: {
      type: Object,
      required: true
    },
    column: {
      type: Number,
      required: true
    },
    line: {
      type: Number,
      required: true
    }
  },
  watch: {
    empty: {
      handler () {
        console.log('novo empty')
        this.clears = this.empty
      },
      deep: true,
      immediate: true
    }
  },
  data: () => ({
    clears: []
  }),
  computed: {
    bgClass () {
      const { isNull, currentSelect, line, column } = this

      if (isNull) {
        return 'bg-gray-600'
      }

      if (currentSelect[line] === column) {
        return 'bg-red-600'
      }

      return 'bg-blue-600'
    },
    isNull () {
      const { line, column, clears } = this
      const lineExists = get(clears, line.toString(), false)

      if (!lineExists) {
        return false
      }

      return clears[line.toString()].includes(column)
    },
    disabled () {
      const { line, column } = this

      return [1, 2, 6, 7].includes(line) &&
        [1, 2, 6, 7].includes(column)
    }
  },
  methods: {
    addSelect() {
      console.log('addSelect')
      const { line, column, isNull } = this
      this.$emit('on-select', line,column, isNull)
    }
  }
}
</script>
