import styled from "styled-components";

interface Props {
  name?: string;
  foundationYear?: number;
  imageUrl?: string;
  division?: string;
  conference?: string;
}

export const TeamProfile = ({
  name,
  foundationYear,
  imageUrl,
  division,
  conference,
}: Props) => {
  const teamMeta = [
    { label: "Year of foundation", value: foundationYear },
    { label: "Division", value: division },
    { label: "Conference", value: conference },
  ];
  return (
    <ProfileContainer>
      <LogoWrapper>
        {imageUrl && (
          <Logo src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt={"Logo"} />
        )}
      </LogoWrapper>
      <TeamInfo>
        <TeamName>{name}</TeamName>
        <MetaWrapper>
          {teamMeta?.map(({ label, value }, index) => {
            return (
              <MetaItem key={index}>
                <ItemLabel>{label}</ItemLabel>
                <ItemValue>{value}</ItemValue>
              </MetaItem>
            );
          })}
        </MetaWrapper>
      </TeamInfo>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  background: linear-gradient(
    276.45deg,
    ${({ theme }) => theme.colors.grey} 0%,
    #393939 100.28%
  );
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    display: flex;
    border-radius: 0 0 10px 10px;
    margin-bottom: 24px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 118px;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    max-width: 500px;
    width: 100%;
    padding: 0;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const TeamInfo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 0 10px;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    text-align: start;
    padding: 65px 0;
  }
`;

const TeamName = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 32px;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const MetaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MetaItem = styled.div`
  margin-bottom: 48px;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    margin-bottom: 54px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ItemLabel = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 8px;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    font-size: 24px;
  }
`;

const ItemValue = styled.div`
  font-size: 14px;
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    font-size: 18px;
  }
`;
