class FileOperations{
  constructor(){
    this.directoryPath = 'cards';
    this.fileName = 'data.json';
    this.filePath = `${this.directoryPath}/${this.fileName}`
  }

  handleSaveData(){
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
    window.api.saveDataToFile(data, this.directoryPath ,this.filePath);
  };
  handleLoadData() {
    return window.api.loadDataFromFile(this.filePath);
  }
};

export default FileOperations;