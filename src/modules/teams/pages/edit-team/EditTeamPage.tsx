import { TeamForm } from "../../components/TeamForm";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { fetchEditTeam } from "../../teamsAsyncActions";
import { useAppDispatch } from "../../../../redux/store";
import { useEffect, useState } from "react";
import { toBase64 } from "../../../../core/helpers/toBase64";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { teamsSelector } from "../../teamsSlice";

interface ParamsId {
  id: string | undefined;
}

export const EditTeamPage = () => {
  const [teamLogo, setTeamLogo] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const { watch, register, handleSubmit, setValue, errors } = useForm();
  const imageUpload: FileList = watch("file");
  const { id }: ParamsId = useParams();
  const { team } = useSelector(teamsSelector);

  useEffect(() => {
    setValue("name", team?.name);
    setValue("division", team?.division);
    setValue("conference", team?.conference);
    setValue("foundationYear", team?.foundationYear);
  }, [setValue, team]);

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
    const imageUrlLogo = team?.imageUrl;
    formData.append("file", file);

    dispatch(
      fetchEditTeam({
        id,
        file,
        formData,
        imageUrlLogo,
        name,
        foundationYear,
        division,
        conference,
      })
    );
  });

  return (
    <EditTeamWrapper>
      <HeaderEditTeam>
        <p>Bread crumbs</p>
      </HeaderEditTeam>
      <TeamForm
        errors={errors}
        onSubmit={onSubmit}
        register={register}
        teamLogo={
          !teamLogo ? "http://dev.trainee.dex-it.ru" + team?.imageUrl : teamLogo
        }
      />
    </EditTeamWrapper>
  );
};

const EditTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #ffffff;
`;

const HeaderEditTeam = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  border-radius: 10px;
  padding-left: 16px;
  color: red;
`;
