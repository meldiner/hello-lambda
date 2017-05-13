import { APIGatewayEvent, Context, Callback } from "@types/aws-lambda";
import DB from "../lib/DB";

export function handler(event: APIGatewayEvent, context: Context, callback: Callback) {
  const db = new DB();

  db.getHelloMessage()
    .then(message => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message,
          input: event
        })
      };
      callback(undefined, response);
    })
    .catch(err => callback(err));
}