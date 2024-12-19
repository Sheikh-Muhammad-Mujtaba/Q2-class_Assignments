import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './env'
import { schema } from './schemaTypes'

export default defineConfig({
  name: "default",
  title: "studio",
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool(),
  ],
})
