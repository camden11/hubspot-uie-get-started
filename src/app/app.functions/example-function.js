exports.main = async (context = {}, sendResponse) => {
  const { text } = context.parameters;

  const ret = `This is coming from a serverless function! You entered: ${text} TESTING TESTING`;
  try {
    sendResponse(ret);
  } catch (error) {
    sendResponse(error);
  }
};
