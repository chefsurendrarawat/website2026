import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'chef-surendra-rawat',
  title: 'Chef Surendra Rawat CMS',
  projectId: 'fojtkp1x',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
