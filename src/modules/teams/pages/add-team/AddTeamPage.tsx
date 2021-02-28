import styled from "styled-components";
import { TeamForm } from "../../components/TeamForm";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../redux/store";
import { fetchAddTeam } from "../../teamsAsyncActions";
import { pathList } from "../../../../routers/pathList";
import { useHistory, useLocation } from "react-router-dom";
import { ContentTitle } from "../../../../components/ContentTitle";
import { LoadState } from "../../../../redux/loadState";
import { LoadingBackdrop } from "../../../../components/LoadingBackdrop";
import { useSelector } from "react-redux";
import { teamsSelector } from "../../teamsSlice";
import { useImageUpload } from "../../../../core/hooks/useImageUpload";

export const AddTeamPage = () => {
  const { pathname } = useLocation();
  const { loading } = useSelector(teamsSelector);
  const { goBack } = useHistory();
  const dispatch = useAppDispatch();
  const { watch, register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const imageUpload: FileList = watch("file");
  const teamLogo = useImageUpload<FileList>(imageUpload);

  const goBackHandler = () => goBack();

  const onSubmit = handleSubmit((Data) => {
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
      <LoadingBackdrop loading={loading === LoadState.pending}>
        <TeamForm
          onSubmit={onSubmit}
          register={register}
          teamLogo={teamLogo}
          errors={errors}
          goBackHandler={goBackHandler}
        />
      </LoadingBackdrop>
    </AddTeamWrapper>
  );
};

const AddTeamWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    border-radius: 10px;
  }
`;
