import styled, { device } from "@theme/utils";
export const Form = styled.form`
    margin-top: -20px;
    ${device.medium} {
        margin-top: -50px;
    }
    .form-select {
        background: #fff;
        height: 60px;
        padding: 15px 30px;
        color: #596190;
        margin-bottom: 20px;
        border: 0px;
        font-size: 15px;
        border-radius: 10px;
    }
`;
export const Input = styled.input`
    background-color: white;
    height: 60px;
    padding: 15px 30px;
    color: #596190;
    margin-bottom: 20px;
    border: 0px;
    font-size: 15px;
    border-radius: 10px;
    &:focus {
        border-color: none;
        outline: none;
        box-shadow: none;
    }
`;
export const Textarea = styled.textarea`
    background-color: white;
    height: 60px;
    padding: 15px 30px;
    color: #596190;
    margin-bottom: 20px;
    border: 0px;
    font-size: 15px;
    border-radius: 10px;
    height: 170px;
    margin-bottom: 30px;
    resize: none;
    &:focus {
        border-color: none;
        outline: none;
        box-shadow: none;
    }
`;
