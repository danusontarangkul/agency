export const splitFullName = (
  fullName: string
): { firstname: string; lastname: string } => {
  const parts = fullName.split(" ");
  const firstname = parts[0];
  const lastname = parts.slice(1).join(" ");
  return { firstname, lastname };
};
