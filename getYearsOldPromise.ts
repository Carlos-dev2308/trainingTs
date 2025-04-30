interface Persona{
    nombre: string;
    fechaNacimiento: Date;
}

interface PersonaConEdad {
    nombre: string;
    edad: number;
}

 function calcularEdades(personas: Persona[]): Promise<PersonaConEdad[]> {
    return new Promise((resolve, reject) => {
        try {
            // ValidaciÃ³n bÃ¡sica del input
            if (!Array.isArray(personas)) {
                throw new Error("El parÃ¡metro debe ser un arreglo de personas");
            }

            const resultado: PersonaConEdad[] = personas.map(persona => {
                // ValidaciÃ³n de que tenga fecha de nacimiento
                if (!(persona.fechaNacimiento instanceof Date)) {
                    throw new Error(`Fecha invÃ¡lida para ${persona.nombre}`);
                }

                const edad = calcularEdad(persona.fechaNacimiento);
                return {
                    nombre: persona.nombre,
                    edad: edad
                };
            });

            resolve(resultado);
        } catch (error) {
            reject(error);
        }
    });
}

function calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

const personas: Persona[] = [
    { nombre: "Juan", fechaNacimiento: new Date(1990, 5, 15) },
    { nombre: "Maria", fechaNacimiento: new Date(1985, 10, 22) },
    { nombre: "Carlos", fechaNacimiento: new Date(2000, 2, 8) }
];

calcularEdades(personas)
    .then(resultado => {
        console.log("Personas con edades calculadas:");
        console.log(resultado);
    })
    .catch(error => {
        console.error("Error al calcular edades:", error.message);
    });

