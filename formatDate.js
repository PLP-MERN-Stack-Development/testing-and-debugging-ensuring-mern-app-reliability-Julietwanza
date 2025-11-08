export const formatDate = (iso) => {
  const date = new Date(iso);
  return isNaN(date) ? '' : date.toLocaleDateString();
};