import { FC } from "react";
import { ContentLayout } from "../../../components/layouts/ContentLayout";
import { TeamCard } from "../components/TeamCard";
import { Button } from "../../../components/ui/Button";
import { fetchTeams } from "../teamsAsyncActions";
import { useAppDispatch } from "../../../redux/store";

export const TeamPage: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <ContentLayout>
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <Button
        onClick={() => {
          dispatch(fetchTeams());
        }}
      >
        Get teams
      </Button>
    </ContentLayout>
  );
};
