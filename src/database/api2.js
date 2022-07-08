export async function getRestaurantsByOffice(office) {
    const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getrestaurantbyoffice?office=${office}`);
    const filteredrestaurants = response.json()
    return filteredrestaurants
  }

export async function getAllFoodByRestaurantId(restaurantId) {
    const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getallfoodbyrestaurant?id=${id}`);
    const menu = response.json()
    return menu
  }

export async function getCommonOrders({deliverylocation, deliveredtime}) {
    const response = await fetch(`https://qw8s9n3udl.execute-api.ap-southeast-1.amazonaws.com/api/getcommonorders?deliverylocation=${deliverylocation}&deliveredtime=${deliveredtime}`);
    const commonorders = response.json()
    return commonorders
  }
