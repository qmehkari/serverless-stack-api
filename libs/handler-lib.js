export default function handler(lambda) {
    //console.log("handler-lib - start");
    return async function (event, context) {
      //console.log("handler-lib - start - function");
      let body, statusCode;
      try {
        // Run the Lambda
        body = await lambda(event, context);
        statusCode = 200;
      } catch (e) {
            console.log(e);
            body = { error: e.message };
            statusCode = 500;
      }
      // Return HTTP response
      return {
        statusCode,
        body: JSON.stringify(body),
      };
    };
  }