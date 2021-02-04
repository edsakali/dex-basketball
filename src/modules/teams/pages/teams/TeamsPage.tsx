import React, { FC, useEffect, useMemo, useState } from "react";
import { ContentLayout } from "../../../../components/layouts/ContentLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TeamCard } from "./components/TeamCard";
import { useSelector } from "react-redux";
import { teamsSelector } from "../../teamsSlice";
import styled from "styled-components";
import { fetchTeams, fetchTeamsFilter } from "../../teamsAsyncActions";
import { useAppDispatch } from "../../../../redux/store";
import { pathList } from "../../../../routers/pathList";
import { Spinner } from "../../../../components/Spiner";
import { CardWrapper } from "../../../../assets/styles/CardWrapper";

export const TeamsPage: FC = () => {
  const { data, loading } = useSelector(teamsSelector);
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const { register, control, handleSubmit, watch } = useForm();

  const { count = 6, size = 6 } = useSelector(teamsSelector);

  const PageSize = watch("PageSize");

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTeamsFilter({ page, PageSize }));
  }, [dispatch, PageSize, page]);

  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const pageCount = useMemo(() => Math.ceil(count / size), [count, size]);

  const onSubmitHandler = handleSubmit((formValues) => {});

  return (
    <ContentLayout
      onPageChange={onPageChange}
      register={register}
      placeholder="Search..."
      nameSearch="Search"
      onSubmit={onSubmitHandler}
      nameSelect="PageSize"
      control={control}
      addItemPath={pathList.content.addTeam}
      pageCount={pageCount}
    >
      {loading === "pending" ? (
        <Spinner />
      ) : (
        <CardWrapper>
          {data &&
            data.map(({ name, foundationYear, id, imageUrl }) => {
              return (
                <TeamLink to={pathList.content.teams + id} key={id}>
                  <TeamCard
                    name={name}
                    foundationYear={foundationYear}
                    imageUrl={imageUrl}
                  />
                </TeamLink>
              );
            })}
        </CardWrapper>
      )}
    </ContentLayout>
  );
};

const TeamLink = styled(Link)`
  text-decoration: none;
`;
