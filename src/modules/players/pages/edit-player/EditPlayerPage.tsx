import { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import debounce from "lodash.debounce";
import styled from "styled-components";
import { PlayerForm, PlayerFormFields } from "../../components/PlayerForm";
import { useAppDispatch } from "../../../../redux/store";
import { toBase64 } from "../../../../core/helpers/toBase64";
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
import { Spinner } from "../../../../components/Spiner";

export const EditPlayerPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const {
    player,
    teamsFilter,
    loadingTeamsFilter,
    loadingPlayer,
  } = useSelector(playersSelector);
  const [playerImage, setPlayerImage] = useState<string | undefined>();
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

  useEffect(() => {
    if (!player) {
      dispatch(fetchPlayerId({ id }));
    }
  }, [dispatch, player, id]);

  useEffect(() => {
    const birthDate = player && new Date(player?.birthday);
    const day = birthDate && ("0" + birthDate.getDate()).slice(-2);
    const month = birthDate && ("0" + birthDate.getMonth()).slice(-2);
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

  useEffect(() => {
    if (imageUpload && imageUpload[0]) {
      toBase64(imageUpload[0]).then((base64) => {
        base64 && setPlayerImage(base64.toString());
      });
    }
  }, [imageUpload]);

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
    <AddPlayerWrapper>
      <ContentTitle
        crumbs={[
          { label: "Main", pathname: "/" },
          { label: "Players", pathname: pathList.content.players },
          { label: player?.name, pathname: pathList.content.players + id },
          { label: "Edit player", pathname: pathname },
        ]}
      />
      {loadingPlayer === LoadState.pending ? (
        <Spinner />
      ) : (
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
      )}
    </AddPlayerWrapper>
  );
};

const AddPlayerWrapper = styled.div`
  border-radius: 10px;
  background: #ffffff;
`;
