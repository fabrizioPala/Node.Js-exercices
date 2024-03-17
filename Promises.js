function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  luckyDraw("Joe")
    .then((result) => {
      console.log("Joe:", result);
    })
    .catch((error) => {
      console.error("Error for Joe:", error);
    })
    .then(() => {
      return luckyDraw("Caroline");
    })
    .then((result) => {
      console.log("Caroline:", result);
    })
    .catch((error) => {
      console.error("Error for Caroline:", error);
    })
    .then(() => {
      return luckyDraw("Sabrina");
    })
    .then((result) => {
      console.log("Sabrina 1:", result);
      return luckyDraw("Sabrina");
    })
    .then((result) => {
      console.log("Sabrina 2:", result);
    })
    .catch((error) => {
      console.error("Error for Sabrina:", error);
    });
  