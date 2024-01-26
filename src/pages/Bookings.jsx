import Heading from "../ui/Heading";
import StyledRowFilter from "../ui/StyledRowFilter";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <StyledRowFilter type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </StyledRowFilter>

      <BookingTable />
    </>
  );
}

export default Bookings;
