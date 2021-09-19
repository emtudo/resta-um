<template>
  <div class="rounded-md bg-yellow-50">
    <div class="text-sm text-yellow-700">
      <table class="table">
        <tbody>
          <tr v-for="line in [1,2,3,4,5,6,7]" v-bind:key="line">
            <td v-for="column in [1,2,3,4,5,6,7]" v-bind:key="column">
              <button-one
                v-on:on-select="onSelect"
                v-bind="{line, column, empty, currentSelect}" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <button v-on:click="doReset" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
    Reiniciar
  </button>

  <button v-on:click="doWin" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
    Ganhar
  </button>
</template>

<script>
import ButtonOne from './components/button.vue'
import get from 'lodash-es/get'
import filter from 'lodash-es/filter'
import options from './demoOptions.js'

export default {
  components: {
    ButtonOne
  },
  data: () => ({
    currentSelect: {

    },
    lines: [1,2,3,4,5,6,7],
    columns: [1,2,3,4,5,6,7],
    empty: {
      4: [4]
    }
  }),
  methods: {
    doReset () {
      this.empty = {
        4: [4]
      }
      this.currentSelect = {}
    },
    doWin () {
      this.doReset()
      let i = 0
      const interval = setInterval(() => {
        const { line, column, isNull } = options[i]
        i=i+1
        this.onSelect(line, column, isNull)
        if (options.length <= i) {
          clearInterval(interval)
        }
      }, 1000)
    },
    onSelect(line, column, isNull) {
      const currentSelect = {
        [line]: column
      } 
      if (!isNull) {
        this.currentSelect = { ...currentSelect}
        return
      }

      const oldSelect = {...this.currentSelect}
      const oldLine = Object.keys(oldSelect)[0]
      if (!oldLine) {
        return
      }
      const oldColumn = this.currentSelect[oldLine]
      const columnIsValid = Math.abs(column-oldColumn) === 2
      if (oldLine === line.toString() && columnIsValid) {
        this.removeEmpty(line, column)
        this.addLineEmpty(oldLine, column, oldColumn)
        return //
      }
      const lineIsValid = Math.abs(parseInt(oldLine)-line) === 2
      if (oldColumn === column && lineIsValid) {
        this.removeEmpty(line, column)
        this.addColumnEmpty(column, line, oldLine)
        return //
      }
    },
    addColumnEmpty (column, line, oldLine) {
      const current = get(this.empty, oldLine.toString(), [])
      current.push(column)
      this.empty[oldLine.toString()] = current
      this.currentSelect = {}

      const diff = line > oldLine
        ? line -1
        : oldLine -1

      const currentDiff = get(this.empty, diff.toString(), [])
      currentDiff.push(column)
      this.empty[diff.toString()] = currentDiff
    },
    removeEmpty (line, column) {
      const current = get(this.empty, line.toString(), [])
      const newItems = filter(current, item => item !== column)
      this.empty[line.toString()] = newItems
    },
    addLineEmpty (line, column, oldColumn) {
      const current = get(this.empty, line.toString(), [])
      current.push(oldColumn)
      const diff = column > oldColumn
        ? column -1
        : oldColumn -1

      current.push(diff)
      this.empty[line.toString()] = current
      this.currentSelect = {}
    }
  }
}
</script>
