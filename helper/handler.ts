export default (fn) => async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const ret = await fn(event, context);

  if (event.httpMethod && typeof ret === "object") {
    const origin = event?.headers?.origin ? event.headers.origin : "*";

    ret.headers = ret.headers || {};
    ret.headers = Object.assign(
      {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "*",
      },
      ret.headers
    );
  }
  return ret;
};
