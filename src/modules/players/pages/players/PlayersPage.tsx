import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import styled from "styled-components";
import { CardWrapper } from "../../../../assets/styles/CardWrapper";
import { ContentLayout } from "../../../../components/layouts/ContentLayout";
import { PlayerCard } from "./components/PlayerCard";
import { playersSelector } from "../../playersSlice";
import { useAppDispatch } from "../../../../redux/store";
import {
  fetchPlayers,
  fetchPlayersTeamIds,
  fetchTeamsFilter,
} from "../../playersAsyncActions";
import { pathList } from "../../../../routers/pathList";
import { Spinner } from "../../../../components/Spiner";
import { OptionTypeBase } from "react-select";
import { LoadState } from "../../../../redux/loadState";
import { InitialPlayersPageParams } from "../../../../api/players/services";
import { EmptyContent } from "../../../../components/EmptyContent";
import emptyPlayerImg from "../../../../assets/images/empty-player-bg.png";

interface FormFields {
  pageSize: OptionTypeBase;
  name: string;
  nameSelects: { value: string }[];
}

export const PlayersPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(InitialPlayersPageParams.page);
  const { loading, data, count, size, teamsFilter } = useSelector(
    playersSelector
  );
  const { register, control, watch } = useForm<FormFields>();
  const { pageSize, name, nameSelects } = watch([
    "pageSize",
    "name",
    "nameSelects",
  ]);

  useEffect(() => {
    nameSelects && dispatch(fetchPlayersTeamIds(nameSelects));
  }, [dispatch, nameSelects]);

  useEffect(() => {
    dispatch(fetchPlayers({ name, page, pageSize: pageSize?.value }));
  }, [dispatch, pageSize, page, name]);

  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const pageCount = useMemo(() => {
    if (count && size) {
      return Math.ceil(count / size);
    }
    return InitialPlayersPageParams.page;
  }, [count, size]);

  const teamsOptions = useMemo(() => {
    return teamsFilter.map((team) => ({
      value: team.id,
      label: team.name,
    }));
  }, [teamsFilter]);

  const handleInputChange = useCallback(
    (newValue: string) => {
      dispatch(
        fetchTeamsFilter({
          name: newValue,
          page: page,
          pageSize: pageSize?.value,
        })
      );
    },
    [dispatch, page, pageSize]
  );

  const loadSuggestions = debounce(handleInputChange, 750);

  return (
    <ContentLayout
      onPageChange={onPageChange}
      register={register}
      selectOptions={teamsOptions}
      handleInputChange={loadSuggestions}
      placeholder="Search..."
      nameSearch="name"
      nameSearchSelect="nameSelects"
      control={control}
      addItemPath={pathList.content.addPlayer}
      pageCount={pageCount}
    >
      {loading === LoadState.pending ? (
        <Spinner />
      ) : data.length ? (
        <CardWrapper>
          {data &&
            data.map(({ name, id, number, team, avatarUrl }) => {
              return (
                <PlayerLink to={pathList.content.players + id} key={id}>
                  <PlayerCard
                    name={name}
                    number={number}
                    team={team}
                    avatarUrl={avatarUrl}
                  />
                </PlayerLink>
              );
            })}
        </CardWrapper>
      ) : (
        <EmptyContent label={"player"} emptyImg={emptyPlayerImg} />
      )}
    </ContentLayout>
  );
};

const PlayerLink = styled(Link)`
  text-decoration: none;
`;
