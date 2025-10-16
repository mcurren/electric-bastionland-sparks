export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function rollDice(d, isIndex = false) {
  const result = getRandomNumber(1, d)
  return isIndex ? result - 1 : result
}

export function rollTable(table) {
  const randomIndex = Math.floor(Math.random() * table.length)
  return table[randomIndex]
}
