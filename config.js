const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 2;
const GENESIS_DATA = {
  timestamp: 1,
  prevHash: "000x",
  hash: "00x12",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
};
module.exports = { GENESIS_DATA, MINE_RATE };
