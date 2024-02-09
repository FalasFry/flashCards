import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const fs = require('fs');

// Custom APIs for renderer
const api = {
  saveDataToFile: (data, directoryPath,filePath) => {
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
    try {
      fs.writeFileSync(filePath, JSON.stringify(data));
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  },
  loadDataFromFile: (filePath) => {
    try {
      let data = JSON.parse(fs.readFileSync(filePath));
      console.log('Data Loaded Successfully');
      return data;
    } catch (error) {
      console.error('Error reading data: ', error);
    }
  },
  countTotalDecks: (directoryPath) => {
    try {
      const files = fs.readdirSync(directoryPath);
      const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');
      return jsonFiles.length;
    } catch (error) {
      console.error('Error counting JSON files:', error);
      return 0;
    }
  }
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
