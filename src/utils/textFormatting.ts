export const formatParenthesesInCarSystem = (text: string): string => {
  if (text.includes('(ללא פירוק גלגלים)')) {
    text = text.replace(
      '(ללא פירוק גלגלים)',
      '‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ (ללא פירוק גלגלים)',
    );
  }
  if (text.includes('( קידמי ואחורי )')) {
    text = text.replace('( קידמי ואחורי )', '‎ ‎ ‎ ‎ ( קידמי ואחורי )');
  }
  return text;
};
