
const verifyApiHeaderToken = (req, res, next) => {
  const apitoken = req.get('apitoken');
  if (apitoken){
    if (apitoken === process.env.API_TOKEN) {
      return next();
    } else {
      return sendUnauthorized(res);
    }
  } else {
    return sendUnauthorized(res);
  }
}

const sendUnauthorized = (res)=> {
  return res.status(401).json({"error":"Recurso no autorizado!"});
}

module.exports = {
  verifyApiHeaderToken,
  sendUnauthorized
};
