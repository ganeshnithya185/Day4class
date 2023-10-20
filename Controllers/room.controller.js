const roomAvailable = {
  "Number of Seats available": "100",
  "Amenities in room": "Ac ,Fridge, LED",
  "Price for 1 Hour": "200",
};
export const Availableroom = (req, res) => {
  res.status(200).json({ data: roomAvailable });
};

const roomBookedData = [
  {
    RoomName: "Venkateshwara Lodge",
    Bookedstatus: "Booked",
    CustomerName: "Sruthi Priya",
    Date: "01-10-2023",
    StartTime: "10AM",
    EndTime: "9AM",
    RoomId: "101",
  },
  {
    RoomName: "Venkateshwara Lodge",
    Bookedstatus: "Booked",
    CustomerName: "Harish",
    Date: "02-10-2023",
    StartTime: "12AM",
    EndTime: "11AM",
    RoomId: "102",
  },
  {
    RoomName: "Venkateshwara Lodge",
    Bookedstatus: "Booked",
    CustomerName: "Prasanna Vishnu",
    Date: "04-10-2023",
    StartTime: "5AM",
    EndTime: "4AM",
    RoomId: "103",
  },
  {
    RoomName: "Venkateshwara Lodge",
    Bookedstatus: "Booked",
    CustomerName: "Darshan Raj",
    Date: "10-10-2023",
    StartTime: "11AM",
    EndTime: "10AM",
    RoomId: "104",
  },
  {
    RoomName: "Venkateshwara Lodge",
    Bookedstatus: "Booked",
    CustomerName: "Gopika",
    Date: "12-10-2023",
    StartTime: "7AM",
    EndTime: "6AM",
    RoomId: "105",
  },
  {
    RoomName: "Venkateshwara Lodge",
    Bookedstatus: "Booked",
    CustomerName: "Jana Sri",
    Date: "07-10-2023",
    StartTime: "9AM",
    EndTime: "8AM",
    RoomId: "106",
  },
  {
    RoomName: "Venkateshwara Lodge",
    Bookedstatus: "Booked",
    CustomerName: "Youthika",
    Date: "25-10-2023",
    StartTime: "5PM",
    EndTime: "4PM",
    RoomId: "107",
  },
];
export const GetroomBook = (req, res) => {
  res.status(200).json({ data: roomBookedData });
};

const customerBookedData = [
  {
    CustomerName: "Sruthi Priya",
    RoomName: "Venkateshwara Lodge",
    Date: "01-10-2023",
    StartTime: "10AM",
    EndTime: "9AM",
  },
  {
    CustomerName: "Harish",
    RoomName: "Venkateshwara Lodge",
    Date: "02-10-2023",
    StartTime: "12AM",
    EndTime: "11AM",
  },
  {
    CustomerName: "Prasanna Vishnu",
    RoomName: "Venkateshwara Lodge",
    Date: "04-10-2023",
    StartTime: "5AM",
    EndTime: "4AM",
  },
  {
    CustomerName: "Darshan Raj",
    RoomName: "Venkateshwara Lodge",
    Date: "10-10-2023",
    StartTime: "11AM",
    EndTime: "10AM",
  },
  {
    CustomerName: "Gopika",
    RoomName: "Venkateshwara Lodge",
    Date: "12-10-2023",
    StartTime: "7AM",
    EndTime: "6AM",
  },
  {
    CustomerName: "Jana Sri",
    RoomName: "Venkateshwara Lodge",
    Date: "07-10-2023",
    StartTime: "9AM",
    EndTime: "8AM",
  },
  {
    CustomerName: "Youthika",
    RoomName: "Venkateshwara Lodge",
    Date: "25-10-2023",
    StartTime: "5PM",
    EndTime: "4PM",
  },
  {
    CustomerName: "Sruthi Priya",
    RoomName: "Venkateshwara Lodge",
    Date: "30-10-2023",
    StartTime: "10AM",
    EndTime: "9AM",
  },
];
export const CustomerBooking = (req, res) => {
  res.status(200).json({ data: customerBookedData });
};

export const CreateBooking = (req, res) => {
  const newBookingRoom = req.body;
  const requestedDate = req.body.date;
  const existingBooking = customerBookedData.find((booking) => booking.date=== requestedDate);
  if (!existingBooking) {
    res.status(400).json({ message: "Room is already booked for this date" });
  } else {
    customerBookedData.push(newBookingRoom);
    res.status(200).json({ message: "New room added" });
  }
};
export const CountCustomerBookings = (req, res) => {
  const { customerName, roomName, date, startTime, endTime, roomId } =
    req.query;

  let count = 0;

  for (const booking of customerBookedData) {
    if (
      booking.CustomerName === customerName &&
      booking.RoomName === roomName &&
      booking.Date === date &&
      booking.StartTime === startTime &&
      booking.EndTime === endTime &&
      booking.RoomId === roomId
    ) {
      count++;
    }
  }

  res.status(200).json({ count });
};

