interface ProductTagProps {
  isOnSale: boolean;
  text?: string;
  variant?: 'sale' | 'new' | 'featured';
}

export function ProductTag({ 
  isOnSale, 
  text = "¡Oferta!", 
  variant = 'sale' 
}: ProductTagProps) {
  if (!isOnSale) return null;

  const getTagStyles = (variant: ProductTagProps['variant']): string => {
    const baseStyles = "absolute top-3 left-3 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg";
    
    switch (variant) {
      case 'sale':
        return `${baseStyles} bg-gradient-to-r from-red-500 to-pink-500`;
      case 'new':
        return `${baseStyles} bg-gradient-to-r from-green-500 to-emerald-500`;
      case 'featured':
        return `${baseStyles} bg-gradient-to-r from-purple-500 to-indigo-500`;
      default:
        return `${baseStyles} bg-gradient-to-r from-red-500 to-pink-500`;
    }
  };

  return (
    <div className={getTagStyles(variant)}>
      {text}
    </div>
  );
}