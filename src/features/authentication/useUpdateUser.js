import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  // const queryClient = useQueryClient();
  // const { mutate: updateUser, isLoading: isUpdating } = useMutation({
  //   mutationFn: updateCurrentUser,
  //   onSuccess: ({ user }) => {
  //     toast.success("User account successfully updated"),
  //       queryClient.setQueryData(["user"], user);
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
  // return { updateUser, isUpdating };
  function updateUser() {
    toast.success("Some functions are not available in the public branch");
  }
  return { updateUser };
}
