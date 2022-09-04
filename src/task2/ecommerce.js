////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

export const fetchAllOrders = async () => {
  //1. TODO: fetch all ids using the "fetchOrderById"
  //the given ids, make it work as efficient and clean as possible.
  const ids = allIds;
  const orders = ids.map(async (id) => {
    return fetchOrderById(id);
  });
  return await Promise.all(orders);
};

export const bucketOrdersByUsers = async () => {
  //   2. TODO: using the function from section 1 you should now bucket the orders by user.
  // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
  let ordersByUsers = {};
  const orders = await fetchAllOrders();
  orders.forEach((order) => {
    if (!ordersByUsers[order.userId]) {
      ordersByUsers[order.userId] = [];
    }
    ordersByUsers[order.userId] = [...ordersByUsers[order.userId], order];
  });
  return ordersByUsers;
};

export const getLast2WeeksOrders = async () => {
  // 3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
  const twoWeeksTimeStemp = Date.now() - 1000 * 60 * 60 * 24 * 14;
  const orders = await fetchAllOrders();
  const lastTwoWeeksOrders = orders.filter((order) => {
    return order.timestamp > twoWeeksTimeStemp;
  });
  return lastTwoWeeksOrders;
};

export const bucketOrdersByDate = async () => {
  //   4. TODO: using the function from section 3 bucket the orders by date.
  // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
  let ordersByDate = {};
  const orderByTwoWeeks = await getLast2WeeksOrders();
  orderByTwoWeeks.forEach((order) => {
    const day = new Date(order.timestamp).getDate();
    if (!ordersByDate[day]) {
      ordersByDate[day] = [];
    }
    ordersByDate[day] = [...ordersByDate[day], order];
  });
  return ordersByDate;
};

fetchAllOrders();
// .then(console.log);

bucketOrdersByUsers();
// .then(console.log);

getLast2WeeksOrders();
// .then(console.log);

bucketOrdersByDate();
// .then(console.log);

////////////////////////////////////////
