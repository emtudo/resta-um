const middle = [
  {
    line: 5,
    column: 5,
    isNull: false
  },
  {
    line: 3,
    column: 5,
    isNull: true
  },

  {
    line: 4,
    column: 3,
    isNull: false
  },
  {
    line: 2,
    column: 3,
    isNull: true
  },

  {
    line: 3,
    column: 5,
    isNull: false
  },
  {
    line: 3,
    column: 3,
    isNull: true
  },

  {
    line: 2,
    column: 3,
    isNull: false
  },
  {
    line: 4,
    column: 3,
    isNull: true
  },

  {
    line: 4,
    column: 4,
    isNull: false
  },
  {
    line: 4,
    column: 2,
    isNull: true
  },

  {
    line: 6,
    column: 3,
    isNull: false
  },
  {
    line: 4,
    column: 3,
    isNull: true
  },

  {
    line: 4,
    column: 2,
    isNull: false
  },
  {
    line: 4,
    column: 4,
    isNull: true
  },
]

const right = [
  {
    line: 5,
    column: 4,
    isNull: false
  },
  {
    line: 5,
    column: 6,
    isNull: true
  },

  {
    line: 5,
    column: 7,
    isNull: false
  },
  {
    line: 5,
    column: 5,
    isNull: true
  },

  {
    line: 4,
    column: 7,
    isNull: false
  },
  {
    line: 4,
    column: 5,
    isNull: true
  },

  {
    line: 4,
    column: 5,
    isNull: false
  },
  {
    line: 2,
    column: 5,
    isNull: true
  },

  {
    line: 3,
    column: 7,
    isNull: false
  },
  {
    line: 3,
    column: 5,
    isNull: true
  },

  {
    line: 2,
    column: 5,
    isNull: false
  },
  {
    line: 4,
    column: 5,
    isNull: true
  },
]

const bottom = [
  {
    line: 5,
    column: 6,
    isNull: false
  },
  {
    line: 5,
    column: 4,
    isNull: true
  },
  {
    line: 7,
    column: 5,
    isNull: false
  },
  {
    line: 5,
    column: 5,
    isNull: true
  },
  {
    line: 7,
    column: 3,
    isNull: false
  },
  {
    line: 7,
    column: 5,
    isNull: true
  },
  {
    line: 4,
    column: 5,
    isNull: false
  },
  {
    line: 6,
    column: 5,
    isNull: true
  },
  {
    line: 7,
    column: 5,
    isNull: false
  },
  {
    line: 5,
    column: 5,
    isNull: true
  },
]

const top = [
  {
    line: 3,
    column: 4,
    isNull: false
  },
  {
    line: 3,
    column: 2,
    isNull: true
  },
  {
    line: 1,
    column: 3,
    isNull: false
  },
  {
    line: 3,
    column: 3,
    isNull: true
  },
  {
    line: 3,
    column: 2,
    isNull: false
  },
  {
    line: 3,
    column: 4,
    isNull: true
  },
  {
    line: 1,
    column: 5,
    isNull: false
  },
  {
    line: 1,
    column: 3,
    isNull: true
  },
  {
    line: 2,
    column: 5,
    isNull: false
  },
  {
    line: 2,
    column: 3,
    isNull: true
  },
  {
    line: 1,
    column: 3,
    isNull: false
  },
  {
    line: 3,
    column: 3,
    isNull: true
  },
]

const left = [
  {
    line: 6,
    column: 4,
    isNull: false
  },
  {
    line: 4,
    column: 4,
    isNull: true
  },
  {
    line: 5,
    column: 2,
    isNull: false
  },
  {
    line: 5,
    column: 4,
    isNull: true
  },
  {
    line: 3,
    column: 2,
    isNull: false
  },
  {
    line: 5,
    column: 2,
    isNull: true
  },
  {
    line: 5,
    column: 1,
    isNull: false
  },
  {
    line: 5,
    column: 3,
    isNull: true
  },
  {
    line: 3,
    column: 1,
    isNull: false
  },
  {
    line: 5,
    column: 1,
    isNull: true
  },
  {
    line: 5,
    column: 4,
    isNull: false
  },
  {
    line: 5,
    column: 2,
    isNull: true
  },
  {
    line: 5,
    column: 1,
    isNull: false
  },
  {
    line: 5,
    column: 3,
    isNull: true
  }
]

const options = [
  ...left,
  ...top,
  ...bottom,
  ...right,
  ...middle
]

export default options
