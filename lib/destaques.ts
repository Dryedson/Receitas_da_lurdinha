// Utilitário para seleção de destaques semanais
// Escolhe itens de forma determinística com base no número da semana,
// garantindo que o destaque troque automaticamente a cada 7 dias.

// Quantidade de milissegundos em um dia (constante para evitar recálculo)
const MS_POR_DIA = 86_400_000;

// Retorna o "número da semana" contado desde a época Unix (01/01/1970).
// Como o valor só muda a cada 7 dias, serve como índice estável de rotação semanal.
export function getWeekNumber(date: Date = new Date()): number {
  // Total de dias inteiros desde a época
  const dias = Math.floor(date.getTime() / MS_POR_DIA);
  // Agrupa os dias em blocos de 7 (uma semana)
  return Math.floor(dias / 7);
}

// Seleciona 1 item de uma lista de forma determinística para a semana atual.
// Na próxima semana, o índice avança automaticamente (rotação circular).
export function pickWeekly<T>(items: T[], date: Date = new Date()): T | undefined {
  // Proteção: se a lista estiver vazia, não há o que destacar
  if (items.length === 0) return undefined;
  const semana = getWeekNumber(date);
  // Módulo garante rotação cíclica sem estourar o tamanho da lista
  return items[semana % items.length];
}
