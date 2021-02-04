import styled from "styled-components";
import { TeamForm } from "../../components/TeamForm";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../redux/store";
import { fetchAddTeam } from "../../teamsAsyncActions";
import { useEffect, useState } from "react";
import { toBase64 } from "../../../../core/helpers/toBase64";

export const AddTeamPage = () => {
  const [teamLogo, setTeamLogo] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const { watch, register, handleSubmit, errors } = useForm();
  const imageUpload: FileList = watch("file");

  useEffect(() => {
    if (imageUpload && imageUpload[0]) {
      toBase64(imageUpload[0]).then((base64) => {
        base64 && setTeamLogo(base64.toString());
      });
    }
  }, [imageUpload]);

  const onSubmit = handleSubmit((Data, event) => {
    const { name, division, conference, foundationYear } = Data;
    const file = Data.file[0];
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
      <TeamForm
        onSubmit={onSubmit}
        register={register}
        teamLogo={teamLogo}
        errors={errors}
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
