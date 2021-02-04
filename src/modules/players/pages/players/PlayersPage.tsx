import React, { FC, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { ContentLayout } from "../../../../components/layouts/ContentLayout";
import { pathList } from "../../../../routers/pathList";
import { Spinner } from "../../../../components/Spiner";
import styled from "styled-components";
import { CardWrapper } from "../../../../assets/styles/CardWrapper";
import { Link } from "react-router-dom";
import { PlayerCard } from "./components/PlayerCard";
import { useSelector } from "react-redux";
import { playersSelector } from "../../playersSlice";
import { useAppDispatch } from "../../../../redux/store";
import { fetchPlayers, fetchPlayersFilter } from "../../playersAsyncActions";

export const PlayersPage = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);

  const { loading, data } = useSelector(playersSelector);

  const { count = 6, size = 6 } = useSelector(playersSelector);

  const { register, control, handleSubmit, watch } = useForm();

  const PageSize = watch("PageSize");

  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPlayersFilter({ page, PageSize }));
  }, [dispatch, PageSize, page]);
  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const pageCount = useMemo(() => Math.ceil(count / size), [count, size]);

  const onSubmitHandler = handleSubmit((formValues) => {
    // const { Search } = formValues;
  });

  return (
    <ContentLayout
      onPageChange={onPageChange}
      register={register}
      placeholder="Search..."
      nameSearch="Search"
      onSubmit={onSubmitHandler}
      nameSelect="PageSize"
      control={control}
      addItemPath={pathList.content.addPlayer}
      pageCount={pageCount}
    >
      {loading === "pending" ? (
        <Spinner />
      ) : (
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
      )}
    </ContentLayout>
  );
};

const PlayerLink = styled(Link)`
  text-decoration: none;
`;
