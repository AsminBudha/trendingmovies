export function arrayToObjectById(arrayData) {
  return arrayData.reduce((acc, data) => {
    acc[data.id] = data;

    return acc;
  }, {});
}
