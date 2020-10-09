import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from 'react-dom/test-utils';


test('renders ContactForm without errors', () => {
    render(<ContactForm />);
});
 
test('test user input and submit button', async ()=>{

    render(<ContactForm />);

    //query the virtual dom
    const  firstName = screen.getByPlaceholderText(/edd/i);
    const  lastName = screen.getByPlaceholderText(/burke/i);
    const  email = screen.getByTestId("input-email");
    const  message = screen.getByTestId('input-message');

    //fill out the form

    fireEvent.change(firstName, {target: {value:"Edd"}});
    fireEvent.change(lastName, {target: {value: "Burke"}});
    fireEvent.change(email, {target: {value:"bluebill1049@hotmail.com"}});
    fireEvent.change(message, {target: {value:"I am testing this form"}});
     
    //check the assertion that the inputs contain the values we typed in
    expect(firstName).toHaveValue('Edd')
    expect(lastName).toHaveValue('Burke');
    expect(email).toHaveValue('bluebill1049@hotmail.com');
    expect(message).toHaveValue('I am testing this form');
     // Submit the form (Careful -- state changes can happen asynchronously)

    await act(async ()=>{
        const button = screen.getByTestId(/submit-button/i);
        fireEvent.click(button);
    })
       
    
     

    
})
