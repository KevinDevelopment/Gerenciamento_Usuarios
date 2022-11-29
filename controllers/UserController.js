class UserController {

  async create(req, res) {
    console.log(req.body);
    res.send("pegando o corpo da requisição!");
  }

}

module.exports = new UserController();