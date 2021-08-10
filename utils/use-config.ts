import fs from 'fs-extra'
import YAML from 'yaml'
import { resolve } from './index'

const CONFIG_DIR = resolve(__dirname, '../creative.yaml')

const useConfig = async () => {
  try {
    const output = await fs.readFile(CONFIG_DIR, { encoding: 'utf-8' })
    return YAML.parse(output)
  } catch (error) {
    throw new Error('Unable to load config file')
  }
}

export default useConfig
