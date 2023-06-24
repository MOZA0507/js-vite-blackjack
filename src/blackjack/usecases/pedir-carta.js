
/**
 * Funcion para pedir carta de la baraja
 * @param {Array<string>} deck Deck creado para el juego [Array]
 * @returns {string} La carta que saca el jugador y la cpu [String]
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}