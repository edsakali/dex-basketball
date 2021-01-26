import styled from "styled-components";
import { FormAddTeam } from "../components/FormAddTeam";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../redux/store";
import { fetchAddTeam } from "../teamsAsyncActions";
import { useEffect, useState } from "react";

const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const AddTeamPage = () => {
  const [previewImage, setPreviewImage] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const { watch, register, handleSubmit } = useForm();
  const imageUpload: FileList = watch("file");

  useEffect(() => {
    if (imageUpload && imageUpload[0]) {
      toBase64(imageUpload[0]).then((base64) => {
        base64 && setPreviewImage(base64.toString());
      });
    }
  }, [imageUpload]);

  const onSubmit = handleSubmit((addTeamsData, event) => {
    const { name, division, conference, foundationYear } = addTeamsData;
    const file = addTeamsData.file[0];
    const formData = new FormData();

    formData.append("file", file);

    dispatch(
      fetchAddTeam({ formData, name, foundationYear, division, conference })
    );
  });

  return (
    <AddTeamWrapper>
      <HeaderAddTeam>
        <p>Bread crumbs</p>
      </HeaderAddTeam>
      <FormAddTeam
        onSubmit={onSubmit}
        register={register}
        previewImage={previewImage}
      />
    </AddTeamWrapper>
  );
};

const AddTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #ffffff;
`;
const HeaderAddTeam = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  border-radius: 10px;
  padding-left: 16px;
  color: red;
`;
