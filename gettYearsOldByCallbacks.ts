interface Persona{
    nombre: string;
    fechaNacimiento: Date;
}

interface PersonaConEdad {
    nombre: string;
    edad: number;
}

function calcularEdades(persona: Persona[], callback: (resultado: PersonaConEdad[])=>void):void{
    const resultado: PersonaConEdad[]=persona.map(persona => {const edad= calcularEdad(persona.fechaNacimiento);
    return{
        nombre: persona.nombre,
        edad: edad
    };
});
    callback(resultado);
}

function calcularEdad(fechaNacimiento: Date){
    const hoy= new Date();
    let edad= hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes= hoy.getMonth() - fechaNacimiento.getMonth();
    if( mes <= 0 || (mes===0 && hoy.getDate()<fechaNacimiento.getDate()))
        edad--;
    return edad;
}
    
const personas: Persona[] = [
    { nombre: "Juan", fechaNacimiento: new Date(1990, 5, 15) },
    { nombre: "Maria", fechaNacimiento: new Date(1985, 10, 22) },
    { nombre: "Carlos", fechaNacimiento: new Date(2000, 2, 8) }
];

calcularEdades(personas, (resultado) => {
    console.log("Personas con edades calculadas:");
    console.log(resultado);
    // AquÃ­ puedes hacer lo que necesites con el resultado
});
