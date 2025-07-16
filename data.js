
window.mallaData = [
    // 1° semestre
    [
        { codigo: "ICG4111", nombre: "Fundamentos de administración" },
        { codigo: "ICG4112", nombre: "Matemáticas 1" },
        { codigo: "ICG4113", nombre: "TI para los negocios 1" },
        { codigo: "ICG4114", nombre: "Principios de economía" },
        { codigo: "ICG4115", nombre: "Taller de comunicación 1" },
        { codigo: "ICG4116", nombre: "Inglés 1" }
    ],
    // 2° semestre
    [
        { codigo: "ICG4121", nombre: "Contabilidad 1" },
        { codigo: "ICG4122", nombre: "Planificación y Diseño Org.", requisitos: ["ICG4111"] },
        { codigo: "ICG4123", nombre: "Matemáticas 2", requisitos: ["ICG4112"] },
        { codigo: "ICG4124", nombre: "TI para los negocios 2", requisitos: ["ICG4113"] },
        { codigo: "ICG4125", nombre: "Intro a la Microeconomía", requisitos: ["ICG4114"] },
        { codigo: "ICG4126", nombre: "Inglés 2", requisitos: ["ICG4116"] }
    ],
    // 3° semestre
    [
        { codigo: "ICG4231", nombre: "Contabilidad 2", requisitos: ["ICG4121"] },
        { codigo: "ICG4232", nombre: "Matemáticas 3", requisitos: ["ICG4123"] },
        { codigo: "ICG4233", nombre: "TI para los negocios 3", requisitos: ["ICG4124"] },
        { codigo: "ICG4234", nombre: "Intro a la Macroeconomía", requisitos: ["ICG4114"] },
        { codigo: "ICG4235", nombre: "Inglés 3", requisitos: ["ICG4126"] },
        { codigo: "CFG1_6", nombre: "Curso Formación General 1" }
    ],
    // 4° semestre
    [
        { codigo: "ICG4241", nombre: "Estrategia empresarial", requisitos: ["ICG4122"] },
        { codigo: "ICG4242", nombre: "Estadística Descriptiva", requisitos: ["ICG4123"] },
        { codigo: "ICG4243", nombre: "Matemáticas 4", requisitos: ["ICG4232"] },
        { codigo: "ICG4244", nombre: "Economía de la empresa", requisitos: ["ICG4125", "ICG4232"] },
        { codigo: "ICG4245", nombre: "Fundamentos de costos", requisitos: ["ICG4121"] },
        { codigo: "CFG2_6", nombre: "Curso Formación General 2" }
    ],
    // 5° semestre
    [
        { codigo: "ICG4351", nombre: "Análisis de EEFF", requisitos: ["ICG4231"] },
        { codigo: "ICG4352", nombre: "Costos y presupuestos", requisitos: ["ICG4245"] },
        { codigo: "ICG4353", nombre: "Inferencia Estadística", requisitos: ["ICG4242"] },
        { codigo: "ICG4354", nombre: "Sistemas de información", requisitos: ["ICG4124"] },
        { codigo: "ICG4355", nombre: "Modelamiento de Datos", requisitos: ["ICG4233", "ICG4243"] },
        { codigo: "CFG3_6", nombre: "Curso Formación General 3" }
    ],
    // 6° semestre
    [
        { codigo: "ICG4361", nombre: "Control de gestión 1", requisitos: ["ICG4241", "ICG4244"] },
        { codigo: "ICG4362", nombre: "Desarrollo de sistemas", requisitos: ["ICG4354"] },
        { codigo: "ICG4363", nombre: "Investigación operativa", requisitos: ["ICG4355"] },
        { codigo: "ICG4364", nombre: "Inglés 4", requisitos: ["ICG4235"] },
        { codigo: "ICG4365", nombre: "Gestión Financiera", requisitos: ["ICG4352"] },
        { codigo: "CFG4_6", nombre: "Curso Formación General 4" }
    ],
    // 7° semestre
    [
        { codigo: "ICG4471", nombre: "Control de gestión 2", requisitos: ["ICG4361", "ICG4352"] },
        { codigo: "ICG4472", nombre: "Control Interno", requisitos: ["ICG4365"] },
        { codigo: "ICG4473", nombre: "Minería de Datos", requisitos: ["ICG4353"] },
        { codigo: "ICG4474", nombre: "Gestión de procesos", requisitos: ["ICG4363"] },
        { codigo: "ICG4475", nombre: "Finanzas corporativas", requisitos: ["ICG4351"] },
        { codigo: "CFG5_6", nombre: "Curso Formación General 5" }
    ],
    // 8° semestre
    [
        { codigo: "ICG4481", nombre: "Control de gestión 3", requisitos: ["ICG4471", "ICG4475"] },
        { codigo: "ICG4482", nombre: "Gestión de riesgos", requisitos: ["ICG4353", "ICG4365"] },
        { codigo: "ICG4483", nombre: "Gobierno de sistemas", requisitos: ["ICG4362"] },
        { codigo: "ICG4484", nombre: "Inteligencia de Negocios", requisitos: ["ICG4473"] },
        { codigo: "ICG4485", nombre: "Evaluación de proyectos", requisitos: ["ICG4475"] },
        { codigo: "CFG6_6", nombre: "Curso Formación General 6" }
    ],
    // 9° semestre
    [
        { codigo: "ICG001", nombre: "Electivo 1", requisitos: ["ICG4481"] },
        { codigo: "ICG002", nombre: "Electivo 2", requisitos: ["ICG4481"] },
        { codigo: "ICG003", nombre: "Electivo 3", requisitos: ["ICG4481"] },
        { codigo: "ICG4591", nombre: "Práctica Profesional", requisitos: ["ICG4481"] }
    ],
    // 10° semestre
    [
        { codigo: "ICG004", nombre: "Electivo 4", requisitos: ["ICG001"] },
        { codigo: "ICG005", nombre: "Electivo 5", requisitos: ["ICG002"] },
        { codigo: "ICG006", nombre: "Electivo 6", requisitos: ["ICG003"] },
        { codigo: "ICG4521", nombre: "Taller de titulación", requisitos: ["ICG4591"] }
    ]
];
