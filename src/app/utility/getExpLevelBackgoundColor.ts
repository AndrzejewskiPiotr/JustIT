export const getBackgroundColor = (expLevel: string): string => {
  switch (expLevel) {
    case 'mid':
      return '#27BE31';
    case 'junior':
      return '#499DFF';
    case 'senior':
      return '#FFB90B';
    default:
      return '#FFB90B';
  }
};
