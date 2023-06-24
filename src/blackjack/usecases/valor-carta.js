
/**
 * Funcion para obtener el valor numerico de la carta sacada
 * @param {string} carta Carta que se obtiene al sacarla [String]
 * @returns {number} Retorna el valor numerico de la carta [Number]
 */
export const valorCarta = ( carta ) => {

    if(!carta) throw new Error('No se paso una carta');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}