import { useSelector } from "react-redux";
import { playersSelector } from "./playersSlice";
import { useEffect, useMemo } from "react";
import { fetchPositions } from "./playersAsyncActions";
import { useAppDispatch } from "../../redux/store";

export const usePlayerPositions = () => {
  const dispatch = useAppDispatch();
  const { positions } = useSelector(playersSelector);

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  const optionsPositions = useMemo(
    () =>
      positions &&
      positions.map((position) => ({
        value: position,
        label: position.replace(/([A-Z][a-z]+)/g, "$1 ").trim(),
      })),
    [positions]
  );

  return { positions, optionsPositions };
};
