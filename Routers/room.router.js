import express from "express";
import { Availableroom, CustomerBooking, CreateBooking, GetroomBook, CountCustomerBookings} from "../Controllers/room.controller.js";

const router = express.Router();

router.get("/", Availableroom);
router.get("/getroomdetails", GetroomBook);
router.get("/get/customerdetails",CustomerBooking);
router.post("/create", CreateBooking);
router.get("/count-customer-bookings", CountCustomerBookings);


export default router;
    