// Programación orientada a objetos es un modelo de programaci´øn

// 1. Clases
// 2. Objetos

// 3. Herencia
// 4. Encapsulamiento
// 5. Abstracción
// 6. Poliformismo

class Carro {
    constructor(modelo,marca, color, potencia ){
        this.modelo = modelo
        this.marca = marca
        this.color = color
        this.potencia = potencia
    }

    // Metodos
    desplazarse(){
        console.log('estoy moviendome')
    }

    frenar(){
        console.log('estoy frenando')
    }

    limpiar_parabrisas(){
        console.log('estoy limpienado mi vidrio')
    }
}

const opel = new Carro('astra','opel', 'azul oscuro', 750 )
const carro_pascual = new Carro('fiesta','ford', 'blanco', 1200 )
const leon = new Carro('leon','seat', 'gris', 750 )




// Leilani 
// Persona, mujer, programadora, estudiantes, hija
// nombre , personalidad, nacionalidad, genero
// pensar, sentir, comer

class Persona {
    constructor( nombre , personalidad, nacionalidad, genero){
        this.nombre = nombre
        this.personalidad = personalidad
        this.nacionalidad = nacionalidad
        this.genero = genero
    }

    pensar(){
        console.log('estoy pensando')
    }
    sentir(){
        console.log('estoy sintiendo yei')
    }
    comer(){
        console.log('estoy comeindo yumi')
    }
}

const leilani = new Persona( 'leilani' , 'amigable', 'mexicana, española', 'mujer')

const emilio = new Persona( 'emilio' , 'directo', 'italiana, venezolana', 'hombre')

const gabriel = new Persona( 'gabriel' , 'pachanguero', 'argentina, venezolana', 'hombre')

const mi_hijo = new Persona( 'santiago' , 'divino', 'colombiano', 'hombre')



class User(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    username: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String)




class Campeonato(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    nombre: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    premio: Mapped[str] = mapped_column(Integer)
    id_ciudad: Mapped[str] = mapped_column(Integer)


    			
 			id_ciudad
1	moto gp	100000	1