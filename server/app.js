const fs = require("fs");
function saveFile(filePath, fileData) {
  console.log("good");
  return new Promise((resolve, reject) => {
    console.log("come in");
    // 块方式写入文件
    const wstream = fs.createWriteStream(filePath);
    wstream.on("open", () => {
      const blockSize = 128;
      const nbBlocks = Math.ceil(fileData.length / blockSize);
      for (let i = 0; i < nbBlocks; i += 1) {
        const currentBlock = fileData.slice(
          blockSize * i,
          Math.min(blockSize * (i + 1), fileData.length)
        );
        wstream.write(currentBlock);
      }
      wstream.end();
    });
    wstream.on("error", err => {
      reject(err);
    });
    wstream.on("finish", () => {
      resolve(true);
    });
  });
}
saveFile(
  "./test.txt",
  Array(1000)
    .fill("没了")
    .join("，")
).then(res => {
  console.log(res);
});
