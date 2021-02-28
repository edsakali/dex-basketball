import { useCallback, useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import debounce from "lodash.debounce";
import styled from "styled-components";
import { useAppDispatch } from "../../../../redux/store";
import { fetchAddPlayer, fetchTeamsFilter } from "../../playersAsyncActions";
import { PlayerForm, PlayerFormFields } from "../../components/PlayerForm";
import { ContentTitle } from "../../../../components/ContentTitle";
import { pathList } from "../../../../routers/pathList";
import { usePlayerPositions } from "../../usePlayerPositions";
import { playersSelector } from "../../playersSlice";
import { LoadState } from "../../../../redux/loadState";
import { LoadingBackdrop } from "../../../../components/LoadingBackdrop";
import { useImageUpload } from "../../../../core/hooks/useImageUpload";

export const AddPlayerPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  const { teamsFilter, loadingTeamsFilter, loadingPostPlayer } = useSelector(
    playersSelector
  );
  const { optionsPositions } = usePlayerPositions();
  const { watch, register, handleSubmit, control } = useForm<PlayerFormFields>({
    mode: "onBlur",
  });
  const imageUpload: FileList = watch("file");
  const playerImage = useImageUpload<FileList>(imageUpload);

  useEffect(() => {
    dispatch(fetchTeamsFilter({}));
  }, [dispatch]);

  const goBackHandler = () => goBack();

  const teamsOptions = useMemo(() => {
    return teamsFilter.map((team) => ({
      value: team.id,
      label: team.name,
    }));
  }, [teamsFilter]);

  const handleInputChange = useCallback(
    (newValue: string) => {
      newValue && dispatch(fetchTeamsFilter({ name: newValue }));
    },
    [dispatch]
  );

  const loadSuggestions = debounce(handleInputChange, 750);

  const onSubmit = handleSubmit((Data) => {
    const { name, height, weight, number, birthday } = Data;
    const imageFile = Data.file[0];
    const position = Data.position.value;
    const team = Data.team.value;
    const callback = () => goBack();
    dispatch(
      fetchAddPlayer({
        callback,
        imageFile,
        name,
        position,
        team,
        height,
        weight,
        number,
        birthday,
      })
    );
  });

  return (
    <AddPlayerWrapper>
      <ContentTitle
        crumbs={[
          { label: "Main", pathname: "/" },
          { label: "Players", pathname: pathList.content.players },
          { label: "Add new player", pathname: pathname },
        ]}
      />
      <PlayerForm
        handleInputChange={loadSuggestions}
        register={register}
        onSubmit={onSubmit}
        playerImage={playerImage}
        control={control}
        optionsPositions={optionsPositions}
        teamsOptions={teamsOptions}
        loading={loadingTeamsFilter}
        goBackHandler={goBackHandler}
      />
      {loadingPostPlayer === LoadState.pending && <LoadingBackdrop />}
    </AddPlayerWrapper>
  );
};

const AddPlayerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    border-radius: 10px;
  }
`;
