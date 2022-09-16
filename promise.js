const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const TheaterIXX = await promiseTheaterIXX();
  const TheaterVGC = await promiseTheaterVGC();
  let countemosi = 0;
  
  TheaterIXX.map((values) => {
    if (values.hasil == emosi) countemosi += 1;
  });
  
  TheaterVGC.map((values) => {
    if (values.hasil == emosi) countemosi += 1;
  });

  return countemosi;
};

module.exports = {
  promiseOutput,
};
