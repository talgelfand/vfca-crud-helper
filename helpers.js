import fs from 'fs/promises'

// CREATE
export const appendFile = (fileName, item) => {
  if (!fileName) throw 'The filename is missing!'
  if (!item) throw 'The item is missing!'
  return fs.appendFile(`./data/${fileName}.csv`, item)
}

// READ
export const readFile = async (fileName) => {
  if (!fileName) throw 'The filename is missing!'
  return fs.readFile(`./data/${fileName}.csv`, 'utf8')
}

// UPDATE
export const writeFile = () => {}
