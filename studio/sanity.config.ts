import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId: '5k6y9rvm',
  dataset: 'production',

  plugins: [structureTool()],

  schema: schema,
})
