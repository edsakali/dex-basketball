import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { ContentLayout } from "../../../../components/layouts/ContentLayout";
import { pathList } from "../../../../routers/pathList";

export const PlayersPage: FC = () => {
  const { register, control, handleSubmit, watch } = useForm();

  // const selectedValue = watch("PageSize");

  const onSubmitHandler = handleSubmit((formValues) => {
    const { Search } = formValues;
  });

  return (
    <ContentLayout
      register={register}
      placeholder="Search..."
      nameSearch="Search"
      onSubmit={onSubmitHandler}
      nameSelect="Select"
      control={control}
      addItemPath={pathList.content.addPlayer}
    >
      {}
    </ContentLayout>
  );
};
