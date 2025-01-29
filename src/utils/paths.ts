// utils/paths.ts
export const normalizeImagePath = (filepath: string): string => {
    // Handle undefined or empty paths
    if (!filepath) return '';
    
    // Replace /src or src/ with ~
    return filepath.replace(/^(\/?src\/|\/src\/)/g, '~/');
  };
  
  // For reverse operation if needed
  export const denormalizeImagePath = (filepath: string): string => {
    if (!filepath) return '';
    return filepath.replace(/^~\//, '/src/');
  };
  
  