import styled from "styled-components";
import InputGroup from "./InputGroup";
import DropFileInput from "./DropFileInput";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useStateData } from "../context/StateContextProvider";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 786px) {
    width: 450px;
    margin: 0 auto;
    gap: 0.8rem;
  }
`;

const StyledInput = styled.input`
  padding: 12px;
  outline: none;
  border: 1px solid var(--col-n-3);
  width: 100%;
  background: transparent;
  border-radius: 8px;
  color: var(--col-n-1);

  &:hover {
    border-color: var(--col-n-1);
  }

  @media screen and (min-width: 786px) {
    padding: 16px;
  }
`;

const StyledBtn = styled.button`
  padding: 10px;
  background-color: var(--col-orange);
  font-weight: 700;
  font-size: 16px;
  color: var(--col-n-4);
  transition: all 0.3s;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: var(--col-orange-dark);
  }

  @media screen and (min-width: 786px) {
    padding: 12px;
    font-size: 18px;
  }
`;

//! =======================Component
const Form = () => {
  const { setter, state } = useStateData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [errors, setErrors] = useState<ErrorType>({});

  //! Validate funtionn for fomr
  function validate() {
    const newError: ErrorType = {};
    if (!name.trim()) newError.name = "Name is required";
    if (!email.trim()) newError.email = "Email is required";
    if (email.trim() && !regex.test(email.trim()))
      newError.email = "Please enter a vlaid email addresss";
    if (!github.trim()) newError.github = "Username is required";
    if (!state.imageURL) newError.file = "Plese upload image";

    setErrors({ ...errors, ...newError });
    return Object.keys({ ...errors, ...newError }).length === 0;
  }

  //! FUnction to upload image
  const handleFileUpload = (files: FileList) => {
    const uploadedFile = files[0];
    //! First check file type error
    if (!uploadedFile.type.startsWith("image/")) {
      setErrors({ ...errors, file: "Wrong file format. Only png or jpg" });
      return;
    }

    //! File Size erro
    // You can convert to KB, MB, etc.
    const fileSizeInKB = (uploadedFile.size / 1024).toFixed(2);

    if (Number(fileSizeInKB) > 500) {
      setErrors({
        ...errors,
        file: "File too large. Please upload a photo under 500KB.",
      });
      return;
    }

    //! If every thing is allright. Generate a Preview URL:
    const imageUrl = URL.createObjectURL(uploadedFile);

    // eslint-disbale-next-line
    const { file, ...newErrorObj } = errors;
    setErrors(newErrorObj);
    setter({ ...state, imageURL: imageUrl });
  };

  //! form submit
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isFormValid = validate();
    if (isFormValid)
      setter({ ...state, name, email, github, isVerified: true });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const { name, ...newErrorObj } = errors;
      setErrors(newErrorObj);
    } else {
      setErrors({ ...errors, name: "Name is required" });
    }
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      if (!regex.test(email)) {
        setErrors({ ...errors, email: "Please enter a vlaid email addresss" });
      } else {
        const { email, ...newErrorObj } = errors;
        setErrors(newErrorObj);
      }
    } else {
      setErrors({ ...errors, email: "Email is required" });
    }
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const { github, ...newErrorObj } = errors;
      setErrors(newErrorObj);
    } else {
      setErrors({ ...errors, github: "Username is required" });
    }
    setGithub(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <InputGroup
        label="Upload Avatar"
        info="Upload your photo (JPG or PNG, max size: 500KB"
        error={errors.file}
      >
        <DropFileInput handleFileUpload={handleFileUpload} />
      </InputGroup>

      <InputGroup label="Full Name" error={errors.name}>
        <StyledInput type="text" value={name} onChange={handleNameChange} />
      </InputGroup>

      <InputGroup label="Email Address" error={errors.email}>
        <StyledInput
          type="text"
          placeholder="example@email.com"
          value={email}
          onChange={handleEmailChange}
        />
      </InputGroup>

      <InputGroup label="GitHub Username" error={errors.github}>
        <StyledInput
          type="text"
          placeholder="@yourusername"
          value={github}
          onChange={handleUsernameChange}
        />
      </InputGroup>

      <StyledBtn type="submit">Generate My Ticket</StyledBtn>
    </StyledForm>
  );
};

export default Form;

type ErrorType = {
  name?: string;
  email?: string;
  github?: string;
  file?: string;
};
