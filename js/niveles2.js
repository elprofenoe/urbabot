// Configuración de niveles para Repeticiones Avanzadas (Nivel 2)
const nivelesRepeticiones2 = [
  {
    id: 1,
    titulo: "Limpieza Básica: Verde",
    instrucciones: "Usa repetir para llegar al bote verde, recógelo y llévalo al contenedor verde.",
    grid: [
      ['R', '0', '0', 'B_V', '0', 'C_V'], // R=Urbabot, B_V=Bote Verde, C_V=Contenedor Verde
      ['0', '0', '0', '0', '0', '0']
    ],
    solucionOptima: 3 // Pasos sugeridos
  },
  {
    id: 4,
    titulo: "Clasificación por color",
    instrucciones: "¡Cuidado! Solo recoge el bote Blanco y llévalo al depósito Blanco.",
    grid: [
      ['R', '0', 'B_B', '0', 'C_B'], 
      ['0', '0', '0', 'B_N', 'C_N']  // B_N=Bote Negro, C_N=Contenedor Negro
    ],
    pistas: "Ignora el bote negro, concéntrate en el blanco."
  }
];