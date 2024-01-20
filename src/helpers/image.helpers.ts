export const renameimage = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileName = file.originalname;

  callback(null, `${fileName}`);
};
