let productos = [
    { id: 1, codigo: "IMPORT02", categoria: "IMPORT", nombre: "02 | BRASIL NATUR", descripcion: "Los granos de este café 100% arábica producidos a 1200 mts de altura, provienen de las mejores granjas cafeteras de Brasil, específicamente localizadas en lo alto de las montañas de Cerrado Mineiro en el estado de Minas Gerais, sinónimo de excelencia por su clima templado y suelos fértiles para la producción de café de especialidad.",},
    { id: 2, codigo: "IMPORT03", categoria: "IMPORT", nombre: "03 | ITALIA BLEND03 | ITALIA BLEND", descripcion: "Se compone de distintas variedades de Arábica, seleccionadas en las mejores cosechas del mundo. De Brasil a Etiopía, de Colombia a Guatemala e India. Tostado por los Maestros cafeteros Italianos.Se compone de distintas variedades de Arábica, seleccionadas en las mejores cosechas del mundo. De Brasil a Etiopía, de Colombia a Guatemala e India. Tostado por los Maestros cafeteros Italianos.",},
    { id: 3, codigo: "IMPORT06", categoria: "IMPORT", nombre: "06 | COLOMBIA GUANES DARK", descripcion: "Puro origen, cultivado en suelo arenoso. Luego de que el café es recogido por las manos laboriosas de hombres y mujeres en una apartada región de Colombia en el departamento de Santander, los granos seleccionados son llevados a lomo de mula.",},
    { id: 4, codigo: "IMPORT07", categoria: "IMPORT", nombre: "07 | FAMILIA SELECTION", descripcion: "La riqueza de los suelos de la región, sumada a las condiciones climáticas y al trabajo de los caficultores, da sabores cítricos y frutales apetecidos en los 5 continentes. Detrás de cada bolsa de café que sale de Valle de Cauca hay un proceso de una o varias familias que han construido la vida entre las montañas." ,},
    { id: 5, codigo: "IMPORT08", categoria: "IMPORT", nombre: "08 | GUATEMALA SELECTION", descripcion: "El origen de este café proviene de la alta región no volcánica de Huehuetenango, que permite el cultivo de café en altitudes extremas cuyo resultado son granos con una rica e intensa acidez y cuerpo medio",},
    { id: 6, codigo: "IMPORT09", categoria: "IMPORT", nombre: "09 | EL PORTEÑO", descripcion: "Este Café es perfecto para tomar en espresso. Con su cremosidad y simplicidad se puede convertir en tu café favorito de todos los días.",},
    { id: 7, codigo: "IMPORT10", categoria: "IMPORT" , nombre: "10 | ETIOPIA SELECTION", descripcion: "Los suelos volcánicos de la región, forman un ecosistema ideal para elaborar un café de gran calidad con ligera acidez",},
    { id: 8, codigo: "LAVIRG01", categoria: "LA VIRGINIA", nombre: "SUTIL N°5", descripcion: "Suave y aterciopelado, este café se deja descubrir por su aroma, su blend balanceado y su sabor perfecto.",},
    { id: 9, codigo: "LAVIRG02", categoria: "LA VIRGINIA", nombre: "EQUILIBRADO N°7", descripcion: "Combina la potencia de su aroma con un sabor equilibrado y una redondez exquisita.",},
    { id: 10, codigo: "LAVIRG03", categoria: "LA VIRGINIA", nombre: "INTENSO N°9V", descripcion: "Un particular perfil a tostación le confiere a este blend un sabor intenso que perdura en boca, ideal para los conocedores y amantes del café con personalidad. ",}
]


export const getData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 2500)
    })
}