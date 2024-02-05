module.exports = {
    createError: (description, code) => {
      const error = new Error(description);
      error.code = code;
      throw error;
    },
}