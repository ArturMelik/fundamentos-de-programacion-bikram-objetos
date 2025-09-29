//1
let Coche ={
    marca: "BMW",
    modelo:"Serie 5",
    matricula: "2384 DKG"
};

//2
let Casa ={
    codPostal: 28021,
    calle: "Calle Cachero",
    portal: 5,
    piso: "2B"
};

//3
let FullStackDeveloper = {
    lenguajes: ["JavaScript","PHP", "Mongo DB"],
    proyectos: ["Pagina web", "Tablas"]
}

//4 
let Perro = {
    nombre: "Bimba",
    raza: "Pastor Aleman",
    color:"Negro y Marron",
    edad: 4,
    ladrar: function(){
        console.log("Whooh!");
    },
    popo: function() {
        return Math.random() * 3;
    }
}

//5
let marcaPortatil = Portatil.marca;

//6
let marcaPortatil2 = Portatil.marca;

//7
let grupos = Concierto.grupos;

//8
let RGB = [Led.rojo, Led.verde, Led.azul];

//9
Portatil.modelo = "P345";

//10
Concierto.cartelera.push("Guns N' Roses");

//11
Concierto.fecha = new Date;

//12
Impresora.imprimiendo = {
    nombreArchivo: "Word",
    copias: 1,
    numPaginas: 2
}

//13
let Noticia = {
    titular: "Bombazo",
    cuerpo: "Ha salido el gordo"
    
}

//14
let Persona = {
    nombre: "Artur",
    apellidos: "Melik",
    edad: 30
}

//15
let Avion = {
    numPasajeros: 246,
    despegar: function (){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function (){
        console.log("aterrizando");
    }
}

//16
let Paquete = {
    contenido: ["Boli", "Lapiz", "Pila"]
}

//17
let Pais = {
    numHabitantes: 2895489,
    continente: "Europa",
    gentilicio: "Armenio"
}

//18
let codError = O_Error.codigo;

//19
let integrantes = Grupo.integrantes;

//20
nivelesTinta = Impresora.tinta;

//21
let pixeles = Pantalla.pixeles;

//22
let especificaciones = Movil["especificaciones"];

//23
Grupo.numIntegrantes = 5;

//24
Pantalla.dimensiones = "1920x1080";

//25
if(Led.encendido){
    Led.encendido = false;
}else{
    Led.encendido = true;
};

//26
Movil.temperatura = "20º"
