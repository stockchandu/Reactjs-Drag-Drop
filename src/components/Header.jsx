import { useDispatch } from "react-redux";
import { handleModal } from "../store/modalSlice";
export const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex border p-2 justify-between items-center">
      <div>Board - Work Management</div>
      <div>Task Board </div>
      <button
        onClick={() => {
          dispatch(handleModal(true));
        }}
        className="border p-2 bg-[#0051D4] text-white font-medium"
      >
        Create
      </button>
    </div>
  );
};
