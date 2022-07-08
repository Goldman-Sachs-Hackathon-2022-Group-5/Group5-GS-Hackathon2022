// import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";
// const client = new APIGatewayClient({ region: "REGION" });

export async function getRestaurants() {
    const response = await fetch('https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/restaurant');
    // const myJson =  response.json(); //extract JSON from the http response
    // do something with myJson
    const responseJson = response.json();
    responseJson.then(value => {
      const body = JSON.parse(value.body);
      console.log(body);
      return body;
    }).catch( error => {
      console.log(error);
      return null;
    });
  }