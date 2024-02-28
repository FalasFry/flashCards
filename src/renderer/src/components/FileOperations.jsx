class FileOperations{
  constructor(){
    this.directoryPath = 'cards';
  }

  handleSaveData(deckData, fileName){
    const filePath = `${this.directoryPath}/${fileName}.json`;
    // Communicate with the main process to save data
    window.api.saveDataToFile(deckData, this.directoryPath ,filePath);
  };
  handleLoadData(fileName) {
    const filePath = `${this.directoryPath}/${fileName}.json`
    return window.api.loadDataFromFile(filePath);
  };
  deleteDeckFile(fileName){
    const filePath = `${this.directoryPath}/${fileName}.json`
    window.api.deleteDeckFile(filePath);
  };
  getDecksInfo(){
    return window.api.getDecksInfo(this.directoryPath).decks;
  };
  handleDecksInfo(deckInfo){
    window.api.handleDecksInfo(this.directoryPath, deckInfo);
  };
};

export default FileOperations;