export async function getRestaurantsByOffice(office) {
    const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getrestaurantbyoffice?office=${office}`);
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

  export async function getAllFoodByRestaurantId(restaurantId) {
    const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getallfoodbyrestaurant?id=${id}`);
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

  export async function getCommonOrders({deliverylocation, deliveredtime}) {
    const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getcommonorders?deliverylocation=${deliverylocation}&deliveredtime=${deliveredtime}`);
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

  
