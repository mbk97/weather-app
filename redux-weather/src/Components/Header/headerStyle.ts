import styled from "styled-components";


export const HeaderWrapper = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;

   


`

export const FormWrapper = styled.form`
  display: flex;
  width: 400px;

  button{
    background: transparent; 
    border:none;

    }

    .button{
      font-size:1.8rem;
      color: white;
      cursor: pointer; 
}

input{
    outline: none;
    padding: .8em;
    border-radius: 10px;
    font-size: 18px;
    width:95%;
}

`