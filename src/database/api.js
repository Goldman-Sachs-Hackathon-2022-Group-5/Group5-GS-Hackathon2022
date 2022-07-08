// import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";
// const client = new APIGatewayClient({ region: "REGION" });

export async function getRestaurants() {
    const response = await fetch('https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/restaurant');
    const restaurants = response.json();
    return restaurants;
}

export async function getRestaurantById(id) {
  const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getrestaurantbyid?id=${id}`);
  const restaurantById = response.json();
  return restaurantById
}

export async function getStatus(kerberos, batchID) {
  const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api//getstatus?kerberos=${kerberos}&batchID=${batchID}`);
  const getStatusOfOrder = response.json();
  return getStatusOfOrder;
}

export async function testFunction(kerberos, batchID) {
  const response = await fetch('https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api//getstatus?kerberos=' + kerberos + "&batchID=" + batchID);
  const responseJson = response.json();
  responseJson.then(value => {
    console.log(value);
    return value;
  }).catch( error => {
    console.log(error);
    return null;
  });
}