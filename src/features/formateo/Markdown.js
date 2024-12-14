// src/features/formateo/Markdown.js
export function Markdown(texto) {
  if (!texto) {
    return ''; // Si no hay texto, devolver vacío
  }

  // Aplicamos las reglas de Markdown

  // 1. Negrita (**texto**)
  let textoMarkdown = texto.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

  // 2. Cursiva (*texto* o _texto_)
  textoMarkdown = textoMarkdown.replace(/\*(.*?)\*/g, '<i>$1</i>'); // Cursiva con *
  textoMarkdown = textoMarkdown.replace(/_(.*?)_/g, '<i>$1</i>');  // Cursiva con _

  // 3. Encabezados (# Encabezado)
  textoMarkdown = textoMarkdown.replace(/^(#{1,6})\s*(.*)$/gm, (match, p1, p2) => {
    const level = p1.length;
    return `<h${level}>${p2}</h${level}>`; // Convertir # a <h1>, ## a <h2>, etc.
  });

  // 4. Listas desordenadas (* item o - item)
  textoMarkdown = textoMarkdown.replace(/^[*+-]\s*(.*)$/gm, '<ul><li>$1</li></ul>');

  // 5. Listas ordenadas (1. item)
  textoMarkdown = textoMarkdown.replace(/^(\d+)\.\s*(.*)$/gm, '<ol><li>$2</li></ol>');

  // 6. Enlaces ([texto](url))
  textoMarkdown = textoMarkdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // 7. Código en línea (`código`)
  textoMarkdown = textoMarkdown.replace(/`([^`]+)`/g, '<code>$1</code>');

  return textoMarkdown;
}


