const { Board } = require("../../models");

exports.getBoards = async (req, res, next) => {
  if (!req.session.user) {
    res.status(401).send({ message: "로그인 이후에 이용해주세요." });
    return;
  }

  const boards = await Board.findAll({});
  return res.status(200).send(boards);
};

exports.getBoard = async (req, res, next) => {
  const { id } = req.params;

  const board = await Board.findOne({ where: { id } });

  if (!board) {
    res.status(404).send({ message: "존재하지 않는 게시글입니다." });
    return;
  }

  await Board.update({ view: board.view + 1 }, { where: { id } });

  return res.status(200).send(board);
};
