import styled from "styled-components";
import { PlayerForm } from "./components/PlayerForm";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { useForm } from "react-hook-form";
import { toBase64 } from "../../../../core/helpers/toBase64";
import { fetchPositions } from "../../playersAsyncActions";
import { useSelector } from "react-redux";
import { playersSelector } from "../../playersSlice";
import { teamsSelector } from "../../../teams/teamsSlice";

export const AddPlayerPage = () => {
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  const dispatch = useAppDispatch();

  const { positions } = useSelector(playersSelector);

  const { data } = useSelector(teamsSelector);

  const { watch, register, handleSubmit, control } = useForm();

  const imageUpload: FileList = watch("file");

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  useEffect(() => {
    if (imageUpload && imageUpload[0]) {
      toBase64(imageUpload[0]).then((base64) => {
        base64 && setPreviewImage(base64.toString());
      });
    }
  }, [imageUpload]);

  const optionsPositions = useMemo(
    () =>
      positions &&
      positions.map((position) => ({ value: position, label: position })),
    [positions]
  );
  const optionsTeam = useMemo(
    () => data && data.map(({ id, name }) => ({ value: id, label: name })),
    [data]
  );

  const onSubmit = handleSubmit((Data, event) => {
    const file = Data.file[0];
    const formData = new FormData();
    console.log(Data);

    formData.append("file", file);

    // dispatch(
    //   fetchAddTeam({ formData, name, foundationYear, division, conference })
    // );
  });

  return (
    <AddPlayerWrapper>
      <HeaderAddPlayer>
        <p>Bread crumbs</p>
      </HeaderAddPlayer>
      <PlayerForm
        register={register}
        onSubmit={onSubmit}
        previewImage={previewImage}
        control={control}
        optionsPositions={optionsPositions}
        optionsTeam={optionsTeam}
      />
    </AddPlayerWrapper>
  );
};

const AddPlayerWrapper = styled.div`
  border-radius: 10px;
  background: #ffffff;
`;

const HeaderAddPlayer = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  border-radius: 10px;
  padding-left: 16px;
  color: red;
`;
