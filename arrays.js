// numero personal
const numeroPersonal = [
  { numero: 1, significado: 'Energía de inicio, liderazgo, empuje.' },
  { numero: 2, significado: 'Colaboración, sensibilidad y compañía.' },
  { numero: 3, significado: 'Alegría, comunicación y creatividad.' },
  { numero: 4, significado: 'Trabajo, orden, estructura.' },
  { numero: 5, significado: 'Movimiento, cambios, libertad.' },
  { numero: 6, significado: 'Amor, familia, responsabilidad.' },
  { numero: 7, significado: 'Reflexión, análisis y espiritualidad.' },
  { numero: 8, significado: 'Poder, finanzas, materialización.' },
  { numero: 9, significado: 'Cierre, compasión, liberación.' },
  { numero: 11, significado: 'Intuición elevada, inspiración.' },
  { numero: 22, significado: 'Construcción de grandes cosas con propósito.' }
];

// Número de Destino
const numeroDestino = [
  { numero: 1, significado: 'Liderazgo, independencia, iniciativa.' },
  { numero: 2, significado: 'Diplomacia, cooperación, sensibilidad.' },
  { numero: 3, significado: 'Creatividad, expresión, alegría.' },
  { numero: 4, significado: 'Estabilidad, trabajo duro, organización.' },
  { numero: 5, significado: 'Aventura, libertad, versatilidad.' },
  { numero: 6, significado: 'Armonía, responsabilidad, servicio.' },
  { numero: 7, significado: 'Intuición, análisis, espiritualidad.' },
  { numero: 8, significado: 'Ambición, éxito material, poder.' },
  { numero: 9, significado: 'Humanitarismo, compasión, sabiduría.' },
  { numero: 11, significado: 'Inspiración, idealismo, creatividad y expresión. Sanadores y motivadores.' },
  { numero: 22, significado: 'Visionario/a para transformar el mundo. Construcción, manifestación, pragmatismo.' }
];

// Número del Nombre
const numerosNombre = [
  { numero: 1, personalidad: 'Pionero e Innovador' },
  { numero: 2, personalidad: 'Solidario y buen gestor' },
  { numero: 3, personalidad: 'Consejero y motivador' },
  { numero: 4, personalidad: 'Disciplinado y ejecutor' },
  { numero: 5, personalidad: 'Espíritu libre' },
  { numero: 6, personalidad: 'Protector y responsable' },
  { numero: 7, personalidad: 'Especialista y perfeccionista' },
  { numero: 8, personalidad: 'Gran estratega' },
  { numero: 9, personalidad: 'Genio creativo e idealista' },
  { numero: 11, personalidad: 'Maestro transformador' },
  { numero: 22, personalidad: 'El poder puesto al servicio del espíritu' }
];

// Número del Alma
const numeroAlma = [
  { numero: 1, significado: 'Impulso de independencia, liderazgo interno.' },
  { numero: 2, significado: 'Búsqueda de armonía y cooperación interior.' },
  { numero: 3, significado: 'Necesidad de expresión creativa y alegría interna.' },
  { numero: 4, significado: 'Deseo de estabilidad y estructura profunda.' },
  { numero: 5, significado: 'Ansia de libertad, cambio y experiencias nuevas.' },
  { numero: 6, significado: 'Impulso protector, responsable y amoroso.' },
  { numero: 7, significado: 'Búsqueda de sabiduría, verdad y espiritualidad.' },
  { numero: 8, significado: 'Atracción por el poder, éxito material y logro.' },
  { numero: 9, significado: 'Vocación humanitaria, compasión y servicio global.' },
  { numero: 11, significado: 'Maestro inspirador, visión elevada.' },
  { numero: 22, significado: 'Constructor práctico de grandes metas.' }
];

// Expresión del Alma
const numeroExpresion = [
  { numero: 1, significado: 'Talento para liderar y emprender.' },
  { numero: 2, significado: 'Habilidad de cooperación y diplomacia.' },
  { numero: 3, significado: 'Comunicación efectiva y carismática.' },
  { numero: 4, significado: 'Organización, disciplina y trabajo estructurado.' },
  { numero: 5, significado: 'Adaptabilidad y espíritu aventurero.' },
  { numero: 6, significado: 'Cuidado, servicio y responsabilidad.' },
  { numero: 7, significado: 'Profundidad intelectual y análisis.' },
  { numero: 8, significado: 'Capacidad para manifestar y dirigir.' },
  { numero: 9, significado: 'Compromiso social y compasión práctica.' },
  { numero: 11, significado: 'Visión espiritual, inspiración colectiva.' },
  { numero: 22, significado: 'Gran constructor, visión a gran escala.' }
];

// Proyecto Sentido
const numeroProyecto = [
  { numero: 1, significado: 'Alma pionera y autodeterminada.' },
  { numero: 2, significado: 'Alma que busca unión y balance.' },
  { numero: 3, significado: 'Alma que brilla comunicando y creando.' },
  { numero: 4, significado: 'Alma práctica, eficiente y perseverante.' },
  { numero: 5, significado: 'Alma inquieta, aventurera y libre.' },
  { numero: 6, significado: 'Alma nutricia y entregada.' },
  { numero: 7, significado: 'Alma introspectiva y perfeccionista.' },
  { numero: 8, significado: 'Alma ambiciosa y orientada a resultados.' },
  { numero: 9, significado: 'Alma altruista, guía social.' },
  { numero: 11, significado: 'Alma visionaria y maestra.' },
  { numero: 22, significado: 'Alma constructora de alto impacto.' }
];

// Año personal
const numeroAnioPersonal = [
  { numero: 1, significado: 'Comienzo de un nuevo ciclo. Tiempo de tomar la iniciativa y plantar nuevas semillas.' },
  { numero: 2, significado: 'Año para la paciencia, la cooperación y el desarrollo interior. No forzar.' },
  { numero: 3, significado: 'Etapa de expansión, creatividad, relaciones y autoexpresión.' },
  { numero: 4, significado: 'Tiempo de trabajo duro, estructura y construir bases sólidas.' },
  { numero: 5, significado: 'Año de cambios, libertad, viajes y decisiones rápidas.' },
  { numero: 6, significado: 'Etapa para el hogar, la familia, la responsabilidad y sanar vínculos.' },
  { numero: 7, significado: 'Año de introspección, espiritualidad, estudio y análisis.' },
  { numero: 8, significado: 'Momento de cosechar resultados. Éxito, poder y finanzas.' },
  { numero: 9, significado: 'Fin de ciclo. Tiempo de soltar, cerrar etapas y dejar ir.' },
  { numero: 11, significado: 'Año maestro. Intuición elevada, crecimiento espiritual y guía para otros.' },
  { numero: 22, significado: 'Gran año para materializar sueños con enfoque y visión global.' }
];

// Mes personal

const numeroMesPersonal = [
  { numero: 1, significado: 'Mes para comenzar algo nuevo. Iniciativa y liderazgo.' },
  { numero: 2, significado: 'Mes de colaboración y armonía. Evitar conflictos.' },
  { numero: 3, significado: 'Tiempo de socializar, disfrutar y expresarse.' },
  { numero: 4, significado: 'Organización, enfoque en lo práctico. Estabilidad.' },
  { numero: 5, significado: 'Cambio, movimiento y tomar riesgos moderados.' },
  { numero: 6, significado: 'Compromiso, amor y responsabilidad familiar.' },
  { numero: 7, significado: 'Reflexión, análisis y conexión espiritual.' },
  { numero: 8, significado: 'Oportunidades materiales. Asuntos financieros.' },
  { numero: 9, significado: 'Cierre, limpieza emocional y dejar fluir lo que termina.' },
  { numero: 11, significado: 'Inspiración profunda, claridad y misión personal.' },
  { numero: 22, significado: 'Momento para materializar algo importante con visión global.' }
];