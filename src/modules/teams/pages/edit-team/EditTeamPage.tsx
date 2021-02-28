import { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { fetchEditTeam, fetchTeamId } from "../../teamsAsyncActions";
import { pathList } from "../../../../routers/pathList";
import { TeamForm } from "../../components/TeamForm";
import { useAppDispatch } from "../../../../redux/store";
import { teamsSelector } from "../../teamsSlice";
import { ContentTitle } from "../../../../components/ContentTitle";
import { LoadState } from "../../../../redux/loadState";
import { LoadingBackdrop } from "../../../../components/LoadingBackdrop";
import { useImageUpload } from "../../../../core/hooks/useImageUpload";

export const EditTeamPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const { team, loading } = useSelector(teamsSelector);
  const { watch, register, handleSubmit, setValue, errors } = useForm({
    mode: "onBlur",
  });
  const imageUpload: FileList = watch("file");
  const teamLogo = useImageUpload<FileList>(imageUpload);

  useEffect(() => {
    if (!team) {
      dispatch(fetchTeamId({ id }));
    }
  }, [dispatch, team, id]);

  useEffect(() => {
    if (team) {
      Object.entries(team).forEach(([key, value]) => setValue(key, value));
    }
  }, [setValue, team]);

  const goBackHandler = () => goBack();

  const onSubmit = handleSubmit((Data) => {
    const { name, division, conference, foundationYear } = Data;
    const imageFile = Data.file[0];
    const imageUrlLogo = team?.imageUrl;
    const callback = () => goBack();

    dispatch(
      fetchEditTeam({
        callback,
        imageFile,
        imageUrlLogo,
        id,
        name,
        foundationYear,
        division,
        conference,
      })
    );
  });

  return (
    <EditTeamWrapper>
      <ContentTitle
        crumbs={[
          { label: "Main", pathname: "/" },
          { label: "Teams", pathname: pathList.content.teams },
          { label: team?.name, pathname: pathList.content.teams + id },
          { label: "Edit team", pathname: pathname },
        ]}
      />
      <LoadingBackdrop loading={loading === LoadState.pending}>
        <TeamForm
          errors={errors}
          onSubmit={onSubmit}
          register={register}
          teamLogo={
            !teamLogo && team
              ? "http://dev.trainee.dex-it.ru" + team.imageUrl
              : teamLogo
          }
          goBackHandler={goBackHandler}
        />
      </LoadingBackdrop>
    </EditTeamWrapper>
  );
};

const EditTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};
`;
