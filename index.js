import { readFile, appendFile, writeFile } from './helpers.js'

export const createItems = async (fileName, item) => {
  await appendFile(fileName, `${item}\r\n`)
  return await readFile(fileName)
}

export const readItems = async (fileName) => {
  return await readFile(fileName)
}

// export const updateItems = (fileName, targetItem, newItem) => {}

// export const deleteItems = (fileName, targetItem) => {}

console.log(await createItems(process.argv[2], process.argv[3]))
