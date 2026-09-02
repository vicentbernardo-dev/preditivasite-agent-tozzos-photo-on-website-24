import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ioanix6u',
    dataset: 'production'
  },
  autoUpdates: true,
})