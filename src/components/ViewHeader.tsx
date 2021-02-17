import { Breadcrumbs } from "./navigation/Breadcrumbs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as UpdateImg } from "../assets/images/icons/update.svg";
import { ReactComponent as DeleteImg } from "../assets/images/icons/delete.svg";

interface Props {
  crumbs: Array<{ pathname: string; label?: string }>;
  handleClick: () => void;
  pathEdit: string;
  pathBack: string;
}

export const ViewHeader = ({
  crumbs,
  handleClick,
  pathEdit,
  pathBack,
}: Props) => {
  return (
    <Wrapper>
      <Breadcrumbs crumbs={crumbs} />
      <ActionLinks>
        <ItemLink to={pathEdit}>
          <Update />
        </ItemLink>
        <ItemLink to={pathBack} onClick={handleClick}>
          <Delete />
        </ItemLink>
      </ActionLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;
  border-radius: 0;
  background: ${({ theme }) => theme.colors.white};

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 20px 32px;
    border-radius: 10px 10px 0 0;
  }
`;

const ActionLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
`;

const Update = styled(UpdateImg)`
  width: 24px;
  height: 24px;
`;

const Delete = styled(DeleteImg)`
  width: 24px;
  height: 24px;
`;
