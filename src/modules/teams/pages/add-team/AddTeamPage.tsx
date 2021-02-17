import styled from "styled-components";
import { TeamForm } from "../../components/TeamForm";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../redux/store";
import { fetchAddTeam } from "../../teamsAsyncActions";
import { useEffect, useState } from "react";
import { toBase64 } from "../../../../core/helpers/toBase64";
import { pathList } from "../../../../routers/pathList";
import { useHistory, useLocation } from "react-router-dom";
import { ContentTitle } from "../../../../components/ContentTitle";

export const AddTeamPage = () => {
  const [teamLogo, setTeamLogo] = useState<string | undefined>();
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  const dispatch = useAppDispatch();
  const { watch, register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const imageUpload: FileList = watch("file");

  useEffect(() => {
    if (imageUpload && imageUpload[0]) {
      toBase64(imageUpload[0]).then((base64) => {
        base64 && setTeamLogo(base64.toString());
      });
    }
  }, [imageUpload]);

  const goBackHandler = () => goBack();

  const onSubmit = handleSubmit((Data, event) => {
    const { name, division, conference, foundationYear } = Data;
    const imageFile = Data.file[0];
    const callback = () => goBack();

    dispatch(
      fetchAddTeam({
        callback,
        imageFile,
        name,
        foundationYear,
        division,
        conference,
      })
    );
  });

  return (
    <AddTeamWrapper>
      <ContentTitle
        crumbs={[
          { label: "Main", pathname: "/" },
          { label: "Teams", pathname: pathList.content.teams },
          { label: "Add new team", pathname: pathname },
        ]}
      />
      <TeamForm
        onSubmit={onSubmit}
        register={register}
        teamLogo={teamLogo}
        errors={errors}
        goBackHandler={goBackHandler}
      />
    </AddTeamWrapper>
  );
};

const AddTeamWrapper = styled.div`
  background: #ffffff;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    border-radius: 10px;
  }
`;
