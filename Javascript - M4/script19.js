function ehIsograma(palavra) {
  palavra = palavra.toLowerCase(); // ignora maiúsculas/minúsculas
  const contador = {};

  for (const letra of palavra) {
    if (contador[letra]) {
      // se já existe a letra, não é isograma
      return false;
    }
    contador[letra] = 1;
  }

  return true;
}

// Exemplos
console.log(ehIsograma("amor"));   // true
console.log(ehIsograma("arara"));  // false
console.log(ehIsograma("Brasil")); // true