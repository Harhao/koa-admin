module.exports = (ctx, next) => {
  // console.log(ctx.request.body);
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = "UnAthoration to get the data";
    } else {
      throw err;
    }
  });
};
