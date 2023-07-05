teste = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const erro = true;
      if (erro) {
        reject("deu ruim");
      } else {
        resolve("deu bom");
      }
    }, 5000);
  });
};
async function teste2() {
  await teste();
  console.log("agora foi");
}

teste2();
