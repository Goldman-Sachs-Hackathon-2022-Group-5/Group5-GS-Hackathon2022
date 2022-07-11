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

export async function getRestaurantsByOffice(office) {
  const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getrestaurantbyoffice?office=${office}`);
  const filteredrestaurants = response.json()
  return filteredrestaurants
}

export async function getAllFoodByRestaurantId(restaurantId) {
  const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getallfoodbyrestaurant?id=${restaurantId}`);
  const menu = response.json()
  menu.then(res => {console.log(res)});
  return menu
}

export async function getCommonOrders({deliverylocation, deliveredtime}) {
  const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getcommonorders?deliverylocation=${deliverylocation}&deliveredtime=${deliveredtime}`);
  const commonorders = response.json()
  return commonorders
}

export async function createOrder(data) {
  const response = await fetch('https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/createorder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export async function testFunction(office) {
  const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getrestaurantbyoffice?office=${office}`);
  const responseJson = response.json();
  responseJson.then(value => {
    console.log(value);
    return value;
  }).catch( error => {
    console.log(error);
    return null;
  });
}

