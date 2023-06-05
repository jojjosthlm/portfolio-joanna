import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { StyledText } from "../styles/Text.styled";
import { StyledLink } from "../styles/Link.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Headline } from "../styles/Headline.styled";
import { StyledP } from "../styles/Fonts.styled";
import { HashLink as Link} from "react-router-hash-link";

 
export const VmvImage = styled.img`
    max-width: 60%;
`;

function Varamedvana() {
    return(
        <>
        <StyledHeader>
        <Headline>
                    <h2>Vara med vana</h2>
               
            </Headline>
            </StyledHeader>
            <Container>
            <Link to="/#cases">Back</Link>
            <StyledText>
    
                <h2>Side projects - in progress</h2>
                <StyledP>
                    I believe that, everyone can change and stick to their new habits. In this project I want to create a 
                    web page around everything that revolves around habits, how to loose the bad ones and aquire and keep 
                    those, which benefit us. My experience, both personal and from clients is that it's  much more difficult 
                    to change a habit and even more so, to stick to a good one. Many times, we all set the bar to high and 
                    fail within a few days.
                </StyledP>
   
                    <VmvImage src='../src/assets/Varamedvana_app.svg' alt=""/>
                    
            </StyledText>
            <StyledText>
            <h2>Challenges</h2>
                <p>One challenge is to process my ideas on my own, without a team. The other challage is to 
                    carve out time for a personal project, even if I view this as a passionproject of mine. 
                </p>
                   </StyledText>
                </Container>
        </>
    );
}

export default Varamedvana;