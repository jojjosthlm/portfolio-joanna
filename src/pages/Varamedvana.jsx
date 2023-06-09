import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText, StyledTextWord } from "../styles/Text.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Headline } from "../styles/Headline.styled";
import { StyledH1, StyledP } from "../styles/Fonts.styled";
import Back from "../components/GoBack";
import VmvAppImg from '../assets/Varamedvana_app.svg';

 
export const VmvImage = styled.img`
    max-width: 60%;
`;

function Varamedvana() {
    return(
        <>
        <StyledHeader>
        <Headline>
                    <StyledH1>Vara med vana</StyledH1>
               
            </Headline>
            </StyledHeader>
            <Container>
            <Back />
            <StyledText>
                <StyledTextWord>
                <h2>Side project - "In progress"</h2>
                <StyledP>
                    I believe that, everyone can change and stick to their new habits. In this project I want to create a 
                    web page around everything that revolves around habits, how to loose the bad ones and aquire and keep 
                    those, which benefit us. My experience, both personal and from clients is that it's  much more difficult 
                    to change a habit and even more so, to stick to a good one. Many times, we all set the bar to high and 
                    fail within a few days.
                </StyledP></StyledTextWord>
                    <div>
                    <VmvImage src={VmvAppImg} alt="Image app"/></div>
                    
            </StyledText>
            <StyledText>
                <div>
            <h2>Challenges</h2>
                <StyledP>One challenge is to process my ideas on my own, without a team. The other challage is to 
                    carve out time for a personal project, even if I view this as a passionproject of mine. 
                </StyledP></div>
                   </StyledText>
                </Container>
        </>
    );
}

export default Varamedvana;