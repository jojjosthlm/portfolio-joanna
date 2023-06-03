import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styled from 'styled-components';
import { Container } from '../styles/Container.styled';
import { StyledHeader } from '../styles/Header.styled';
import { Headline } from '../styles/Headline.styled';

const StyledContactForm = styled.div`
  width: 100%;
`;

const StyledForm = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
`;

const StyledInput = styled.input` 
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    `;

    const StyledTextArea = styled.textarea`
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
      `;

     const StyledLabel = styled.label`
        margin-top: 1rem;
     `;
      

    const StyledInputButton = styled.button`
      margin: 2rem 0;
      cursor: pointer;
      color: black;
      text-decoration: none;
      border-radius: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      border: none;
      font-size: 16px;
      font-weight: 700;
      padding: 12px 30px;
      background-color: ${({bg}) => bg  || '#fff'};
      color: ${({color}) => color || '#333'};
      
      &:hover {
        opacity: 0.9;
        transform: scale(0.98);
        }
        `;


function Contact () {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mg87g1p', 'template_bz30kk6', form.current, 'kDbOhJwal9WOFzCwK')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <>
        <StyledHeader>
            <Headline>
            <h2>Contact me</h2>
            </Headline>
            </StyledHeader>
            <Container>
            <StyledContactForm>
      <StyledForm ref={form} onSubmit={sendEmail}>    
        <StyledLabel>Name</StyledLabel>
        <StyledInput type="text" name="to_name" />
        <StyledLabel>Email</StyledLabel>
        <StyledInput type="email" name="from_name" />
        <StyledLabel>Message</StyledLabel>
        <StyledTextArea name="message" />
        <StyledInputButton type="submit" value="Send">Send</StyledInputButton>
      </StyledForm>
    </StyledContactForm>
      </Container>
      </>
    );
}
export default Contact;