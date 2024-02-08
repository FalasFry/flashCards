import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const fs = require('fs');

// Custom APIs for renderer
const api = {
  saveDataToFile: (data, filePath) => {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data));
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  },
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
