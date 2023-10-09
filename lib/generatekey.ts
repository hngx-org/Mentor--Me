const generateKey = (pre: any) =>
  `${pre}_${new Date().getTime()}_${Math.random() + 10}`;
export default generateKey;
