import styled from "styled-components";

interface Props {
  name: string | undefined;
  foundationYear: number | undefined;
  imageUrl: string | undefined;
  division: string | undefined;
  conference: string | undefined;
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
        <TeamMetaWrapper>
          {teamMeta?.map(({ label, value }, index) => {
            return (
              <TeamMetaItem key={index}>
                <ItemLabel>{label}</ItemLabel>
                <ItemValue>{value}</ItemValue>
              </TeamMetaItem>
            );
          })}
        </TeamMetaWrapper>
      </TeamInfo>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  background: linear-gradient(
    276.45deg,
    ${({ theme }) => theme.colors.grey} 0%,
    #393939 100.28%
  );
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    display: flex;
    border-radius: 0 0 10px 10px;
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
  color: #ffffff;
  text-align: center;
  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    text-align: start;
    padding: 65px 0;
  }
`;

const TeamName = styled.h1`
  font-size: 24px;
  margin-bottom: 32px;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const TeamMetaWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

const TeamMetaItem = styled.div`
  margin: 0 0 48px 0;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    margin: 0 84px 54px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ItemLabel = styled.div`
  font-size: 18px;
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
