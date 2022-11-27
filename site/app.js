//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

const express = require("express");
const cors = require("cors");
const path = require("path");
const PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3305 : 8080;

const app = express();

const indexRouter = require("./src/routes/index");
const funcionarioRouter = require("./src/routes/funcionarios");
const avisosRouter = require("./src/routes/avisos");
const medidasRouter = require("./src/routes/medidas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/funcionarios", funcionarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter)

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});