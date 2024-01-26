import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import StyledRowFilter from "../ui/StyledRowFilter";

function Dashboard() {
  return (
    <>
      <StyledRowFilter type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </StyledRowFilter>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
