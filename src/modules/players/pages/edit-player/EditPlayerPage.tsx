import { useCallback, useEffect, useMemo } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import debounce from "lodash.debounce";
import styled from "styled-components";
import { PlayerForm, PlayerFormFields } from "../../components/PlayerForm";
import { useAppDispatch } from "../../../../redux/store";
import {
  fetchEditPlayer,
  fetchPlayerId,
  fetchTeamsFilter,
} from "../../playersAsyncActions";
import { playersSelector } from "../../playersSlice";
import { ContentTitle } from "../../../../components/ContentTitle";
import { pathList } from "../../../../routers/pathList";
import { usePlayerPositions } from "../../usePlayerPositions";
import { LoadState } from "../../../../redux/loadState";
import { LoadingBackdrop } from "../../../../components/LoadingBackdrop";
import { useImageUpload } from "../../../../core/hooks/useImageUpload";

export const EditPlayerPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const { player, teamsFilter, loadingTeamsFilter, loading } = useSelector(
    playersSelector
  );
  const { optionsPositions } = usePlayerPositions();
  const {
    watch,
    register,
    handleSubmit,
    control,
    setValue,
  } = useForm<PlayerFormFields>({
    mode: "onBlur",
  });
  const imageUpload = watch("file");
  const playerImage = useImageUpload<FileList>(imageUpload);

  useEffect(() => {
    if (!player) {
      dispatch(fetchPlayerId({ id }));
    }
  }, [dispatch, player, id]);

  useEffect(() => {
    const birthDate = player && new Date(player?.birthday);
    const day = birthDate && ("0" + birthDate.getDate()).slice(-2);
    const month = birthDate && ("0" + (birthDate.getMonth() + 1)).slice(-2);
    const today =
      birthDate && birthDate.getFullYear() + "-" + month + "-" + day;
    if (player) {
      setValue("name", player.name);
      setValue("height", player.height);
      setValue("weight", player.weight);
      setValue("number", player.number);
      setValue("team", { value: player.team, label: player.team });
      birthDate && setValue("birthday", today);
    }
  }, [setValue, player]);

  useEffect(() => {
    if (player && optionsPositions) {
      setValue("position", { value: player.position, label: player.position });
    }
  }, [player, optionsPositions, setValue]);

  const goBackHandler = () => goBack();

  const teamsOptions = useMemo(() => {
    return teamsFilter.map((team) => ({
      value: team.id,
      label: team.name,
    }));
  }, [teamsFilter]);

  const handleInputChange = useCallback(
    (newValue: string) => {
      dispatch(fetchTeamsFilter({ name: newValue }));
    },
    [dispatch]
  );

  const loadSuggestions = debounce(handleInputChange, 750);

  const onSubmit = handleSubmit((Data) => {
    const { name, height, weight, number, birthday } = Data;
    const imageFile = Data.file[0];
    const position = Data.position.value;
    const team = Data.team.value;
    const imageUrl = player?.avatarUrl;
    const callback = () => goBack();

    dispatch(
      fetchEditPlayer({
        callback,
        id,
        imageUrl,
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
    <EditPlayerWrapper>
      <ContentTitle
        crumbs={[
          { label: "Main", pathname: "/" },
          { label: "Players", pathname: pathList.content.players },
          { label: player?.name, pathname: pathList.content.players + id },
          { label: "Edit player", pathname: pathname },
        ]}
      />
      <LoadingBackdrop loading={loading === LoadState.pending}>
        <PlayerForm
          register={register}
          onSubmit={onSubmit}
          playerImage={
            !playerImage && player
              ? "http://dev.trainee.dex-it.ru" + player.avatarUrl
              : playerImage
          }
          control={control}
          optionsPositions={optionsPositions}
          teamsOptions={teamsOptions}
          handleInputChange={loadSuggestions}
          loading={loadingTeamsFilter}
          goBackHandler={goBackHandler}
        />
      </LoadingBackdrop>
    </EditPlayerWrapper>
  );
};

const EditPlayerWrapper = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};
`;
