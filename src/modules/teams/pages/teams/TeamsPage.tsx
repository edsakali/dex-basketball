import React, { FC, useEffect, useState } from "react";
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

export const TeamsPage: FC = () => {
  const { data, loading } = useSelector(teamsSelector);
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const { register, control, handleSubmit, watch } = useForm();

  const PageSize = watch("PageSize");

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    PageSize && dispatch(fetchTeamsFilter({ page, PageSize }));
  }, [dispatch, PageSize, page]);

  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

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
    >
      {loading === "pending" ? (
        <Spinner />
      ) : (
        <CardWrapper>
          {data &&
            data.map(({ name, foundationYear, id, imageUrl }) => {
              return (
                <TeamsLink to={pathList.content.teams + id} key={id}>
                  <TeamCard
                    name={name}
                    foundationYear={foundationYear}
                    imageUrl={imageUrl}
                  />
                </TeamsLink>
              );
            })}
        </CardWrapper>
      )}
    </ContentLayout>
  );
};
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 16px 0;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin: 32px 0;
  }
`;

const TeamsLink = styled(Link)`
  text-decoration: none;
`;
