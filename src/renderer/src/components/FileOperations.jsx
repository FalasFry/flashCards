class FileOperations{
  constructor(){
    this.directoryPath = 'cards';
  }

  handleSaveData(deckData, fileName){
    const filePath = `${this.directoryPath}/${fileName}.json`
    const data = {
      "0":{
          "Question": "What is the template pattern?",
          "Answer": "If you are building a lot of simmilar classes you can create a template for them and then have subclasses to change only the parts needed to change",
          "Hint": "Only chage parts of superclass"
      },
      "1":{
          "Question": "What is the strategy pattern?",
          "Answer": "When you have multiple choices of algorithms, you can seperate them into subclasses and let the program choose the best one on runtime",
          "Hint": "What algorithms works best for runtime"
      }
    };
    // Communicate with the main process to save data
    window.api.saveDataToFile(data, this.directoryPath ,filePath);
  };
  handleLoadData(fileName) {
    const filePath = `${this.directoryPath}/${fileName}`
    return window.api.loadDataFromFile(filePath);
  };
  getDecksInfo(){
    return window.api.getDecksInfo(this.directoryPath).decks;
  };
  handleDecksInfo(deckInfo){
    window.api.handleDecksInfo(this.directoryPath, deckInfo);
  };
};

export default FileOperations;