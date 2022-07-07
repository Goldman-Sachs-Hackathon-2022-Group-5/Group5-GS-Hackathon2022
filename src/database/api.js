// import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";
// const client = new APIGatewayClient({ region: "REGION" });

export async function getRestaurants() {
    const response = await fetch('https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/restaurant');
    // const myJson =  response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(response.json());
  }