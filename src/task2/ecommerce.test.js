import { fetchOrderById } from "../api";
import {
  fetchAllOrders,
  bucketOrdersByUsers,
  getLast2WeeksOrders,
  bucketOrdersByDate,
} from "./ecommerce";

const ORDER_ID = "70ef599e5eca171b2bce84d1";

test("Ecommerce: fetchOrderById", async () => {
  const orders = await fetchOrderById(ORDER_ID);
  expect(orders).toBeTruthy();
});

test("Ecommerce: fetchAllOrders", async () => {
  const allOrders = await fetchAllOrders();
  expect(allOrders).toBeTruthy();
});

test("Ecommerce: bucketOrdersByUsers", async () => {
  let orderByUsers = await bucketOrdersByUsers();
  expect(orderByUsers).toBeTruthy();
});

test("Ecommerce: getLast2WeeksOrders", async () => {
  let lastTwoWeeksOrders = await getLast2WeeksOrders();
  expect(lastTwoWeeksOrders).toBeTruthy();
});

test("Ecommerce: bucketOrdersByDate", async () => {
  let orderByDate = await bucketOrdersByDate();
  expect(orderByDate).toBeTruthy();
});
