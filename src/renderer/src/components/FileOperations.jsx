import React from 'react';

const MyComponent = () => {

  const directoryPath = 'cards/data';
  const fileName = 'data.json';
  const filePath = `${directoryPath}/${fileName}`

  const handleSaveData = () => {
    const data = {
      "0":{
          "Question": "What is a template pattern?",
          "Answer": "If you are building a lot of simmilar classes you can create a template for them and then have subclasses to change only the parts needed to change",
          "Hint": "Only chage parts of superclass"
      },
      "1":{
          "Question": "What is a strategy pattern?",
          "Answer": "When you have multiple choices of algorithms, you can seperate them into subclasses and let the program choose the best one on runtime",
          "Hint": "What algorithms works best for runtime"
      }
    };
    // Communicate with the main process to save data
    window.api.saveDataToFile(data, directoryPath ,filePath);
  };
  const handleLoadData = () => {
    let data;
    window.api.loadDataFromFile(filePath);
  }

  return (
    <div>
      <button onClick={handleSaveData}>Save Data to File</button>
      <button onClick={handleLoadData}>Load Data from File</button>
    </div>
  );
};

export default MyComponent;