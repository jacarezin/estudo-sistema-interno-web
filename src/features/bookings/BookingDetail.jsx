import styled from "styled-components";
import BookingDataBox from "./BookingDataBox";

import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const navigate = useNavigate();

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;
  const {
    status,
    id,
    guests: { fullName },
  } = booking;
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Modal>
        <ButtonGroup justify="true">
          {status === "unconfirmed" && (
            <Button
              icon={<HiArrowDownOnSquare />}
              onClick={() => navigate(`/checkin/${id}`)}
            >
              Check in
            </Button>
          )}
          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>

          {status === "checked-in" && (
            <Button
              icon={<HiArrowUpOnSquare />}
              onClick={() => checkout(id)}
              disabled={isCheckingOut}
            >
              Check Out
            </Button>
          )}

          <Modal.Open opens="delete">
            <Button variation="danger">Delete</Button>
          </Modal.Open>
        </ButtonGroup>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName={`booking #${id} from ${fullName} `}
            onConfirm={() => {
              deleteBooking(id, { onSuccess: navigate(-1) });
            }}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
