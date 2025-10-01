/**
 * Formatea un precio numérico a una cadena con formato de moneda
 * @param price - El precio a formatear (debe ser un número positivo)
 * @returns Una cadena formateada con el símbolo de moneda
 * @throws Error si el precio no es un número válido o es negativo
 */
export function formatPrice(price: number): string {
  // Validación estricta del tipo y valor
  if (typeof price !== 'number') {
    throw new Error('El precio debe ser un número');
  }
  
  if (isNaN(price)) {
    throw new Error('El precio no puede ser NaN');
  }
  
  if (price < 0) {
    throw new Error('El precio no puede ser negativo');
  }
  
  if (!isFinite(price)) {
    throw new Error('El precio debe ser un número finito');
  }

  // Formatear el precio con separadores de miles y símbolo de moneda
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Tipo para representar un precio válido (número positivo)
 */
export type ValidPrice = number & { readonly __brand: unique symbol };

/**
 * Función de validación que actúa como type guard
 * @param price - El precio a validar
 * @returns true si el precio es válido
 */
export function isValidPrice(price: number): price is ValidPrice {
  return typeof price === 'number' && 
         !isNaN(price) && 
         isFinite(price) && 
         price >= 0;
}

/**
 * Versión segura de formatPrice que usa el tipo ValidPrice
 * @param price - Un precio ya validado
 * @returns Una cadena formateada con el símbolo de moneda
 */
export function formatValidPrice(price: ValidPrice): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}