import styled from "styled-components";
import { Space } from "../components/atoms";
import logoSogang from "../assets/logoSogang.svg";
import { useNavigate } from "react-router-dom";

const Complete = () => {
    const navigate = useNavigate();
    return (
        <>
        <Flex>
            <Text>지원 완료되었습니다.</Text>
            <ImgContainer src={logoSogang} />
            <Description>
                ㆍ 서류 발표 | 2023년 3월 13일(월) 개별 문자로 연락
                <Space height="10px" />
                ㆍ 면접 | 2023년 3월 15일(수) - 2023년 3월 17일(금)
                <Space height="10px" />
                <SmallText>서류 발표 후, 면접 날짜 선택</SmallText>
                <Space height="10px" />
                ㆍ 최종 발표 | 2023년 3월 20일(월)
            </Description>
        </Flex>
        </>
    )

}

export default Complete;

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding: 50px;
`;

const SmallText = styled.div` 
font-size: 15px;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`; 

const ImgContainer = styled.img`
  padding-bottom: 50px;
`;
