import Knex from "knex";
export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "lampadas", image: "lampadas.svg" },
    { title: "Pilhas e baterias", image: "baterias.svg" },
    { title: "lampadas", image: "papes-papelao.svg" },
    { title: "Papéis e papelão", image: "eletronicos.svg" },
    { title: "Resíduos eletrônicos", image: "organicos.svg" },
    { title: "Óleo de cozinha", image: "oleo.svg" },
  ]);
}
