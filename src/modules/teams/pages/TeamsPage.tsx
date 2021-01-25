import React, { FC, useEffect } from "react";
import { ContentLayout } from "../../../components/layouts/ContentLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TeamCard } from "../components/TeamCard";
import { useSelector } from "react-redux";
import { teamsSelector } from "../teamsSlice";
import styled from "styled-components";
import { fetchTeams } from "../teamsAsyncActions";
import { useAppDispatch } from "../../../redux/store";

export const TeamsPage: FC = () => {
  const { data } = useSelector(teamsSelector);
  const dispatch = useAppDispatch();
  const { register, control, handleSubmit, watch } = useForm();

  const selectedValue = watch("PageSize");

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    selectedValue && console.log("dispatch", selectedValue.value);
  }, [selectedValue]);

  const onSubmitHandler = handleSubmit((formValues) => {
    const { Search } = formValues;
    console.log(Search);
  });

  return (
    <ContentLayout
      register={register}
      placeholder="Search..."
      nameSearch="Search"
      onSubmit={onSubmitHandler}
      nameSelect="Select"
      control={control}
    >
      {data &&
        data.map(({ name, foundationYear, id, imageUrl }, index) => {
          return (
            <TeamsLink to="/" key={id}>
              <TeamCard
                name={name}
                foundationYear={foundationYear}
                imageUrl={imageUrl}
              />
            </TeamsLink>
          );
        })}
    </ContentLayout>
  );
};

const TeamsLink = styled(Link)`
  text-decoration: none;
`;
