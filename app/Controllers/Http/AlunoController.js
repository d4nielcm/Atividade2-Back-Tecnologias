"use strict";

const Aluno = use("App/Models/Aluno");

class AlunoController {
  async index() {
    const aluno = Aluno.all();
    return aluno;
  }
  async show() {
    const aluno = Aluno.all();
    return aluno;
  }
  async store({ request }) {
    const data = request.all();
    const disciplinas = data.disciplinas_cursadas.join(', ');
    const aluno = await Aluno.create({...data, disciplinas_cursadas: disciplinas});
    return aluno;
  }
  async update({ request }) {
    const data = request.all();
    const disciplinas = data.disciplinas_cursadas.join(', ');
    const aluno = await Aluno.create({ ...data, disciplinas_cursadas: disciplinas });
    return aluno;
  }
  async delete({ params, response  }) {
    try {
      const aluno = await Aluno.findOrFail(params.id);
      await aluno.delete();
    } catch (err) {
      return response
        .status(err.status)
        .send({ err: { message: "Esse profissional não existe" } });
    }
  }
}
module.exports = AlunoController;
