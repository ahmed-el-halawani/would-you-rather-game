export const logger = (store) => (next) => (action) => {
  console.log(action);
  const nextToAction = next(action);
  console.log(store.getState());

  return nextToAction;
};
