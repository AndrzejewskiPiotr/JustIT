export const getSkillLevel = (level: number): string => {
  switch (level) {
    case 1:
      return 'intern';
    case 2:
      return 'junior';
    case 3:
      return 'regular';
    case 4:
      return 'advanced';
    case 5:
      return 'master';
    default:
      return '';
  }
};
