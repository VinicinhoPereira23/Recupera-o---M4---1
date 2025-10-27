// Importa o módulo prompt-sync (para ler entradas no Node)

function opcao(opcao) {
let opcao = "";
while (opcao !== "3") {
  console.log("\n=== MENU ===");
  console.log("1 - Dizer Olá");
  console.log("2 - Mostrar data atual");
  console.log("3 - Sair");

  switch (opcao) {
    case "1":
      console.log("Olá, usuário!");
      break;

    case "2":
      console.log("Data atual:", new Date().toLocaleDateString());
      break;

    case "3":
      console.log("Saindo...");
      break;

    default:
      console.log("Opção inválida! Tente novamente.");
  }
}
}
opcao(opcao)