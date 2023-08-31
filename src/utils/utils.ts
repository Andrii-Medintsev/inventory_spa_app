export const dateFormat = (date: string) => {
  const formatedDate = new Date(date).toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }
  );

  return formatedDate.replaceAll('/', ' / ');
};
