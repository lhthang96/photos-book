export function convertDatabaseJsonToArray<T>(dbJson: Record<string, T>): T[] {
  const keys = Object.keys(dbJson);

  return keys.map((key) => ({
    ...dbJson[key],
    id: key
  }));
}
