import styled from "styled-components";
import { flexCenter } from "../styles/utilityStyle";
import { useRef, type ChangeEvent } from "react";
import { useStateData } from "../context/StateContextProvider";

const DropWrapper = styled.div`
  position: relative;
  border: 3px dashed var(--col-n-2);
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  transition: all 0.3s;

  p {
    color: var(--col-n-2);
    font-weight: 700;
    margin-top: 6px;

    @media screen and (min-width: 786px) {
      font-size: 20px;
    }
  }

  &.dragover {
    border-color: var(--col-orange);
    /* filter: brightness(150%); */
    background-color: var(--col-n-1);
  }

  &:hover {
    border-color: var(--col-orange);
  }

  @media screen and (min-width: 786px) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  ${flexCenter}
  width: 50px;
  height: 50px;
  background-color: var(--col-n-2);
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Input = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;

const RemoveBtn = styled.button`
  padding: 4px 6px;
  border-radius: 5px;
  background-color: var(--col-n-3);
  color: white;
  z-index: 1000;
`;

const DropFileInput = ({ handleFileUpload }: PropsType) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { state, setter } = useStateData();

  const onDragEnter = () => {
    if (wrapperRef.current) wrapperRef.current.classList.add("dragover");
  };

  const onDragLeave = () => {
    if (wrapperRef.current) wrapperRef.current.classList.remove("dragover");
  };

  const onDrop = () => {
    if (wrapperRef.current) wrapperRef.current.classList.remove("dragover");
  };

  const onFileDrop = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files);
    }
  };
  return (
    <DropWrapper
      ref={wrapperRef}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <IconWrapper>
        {state.imageURL ? (
          <img src={state.imageURL} alt="upload" />
        ) : (
          <img src="/images/icon-upload.svg" alt="upload" />
        )}
      </IconWrapper>
      {state.imageURL ? (
        <RemoveBtn onClick={() => setter({ ...state, imageURL: "" })}>
          Remove Image
        </RemoveBtn>
      ) : (
        <p>Drag and drop or click to upload</p>
      )}

      <Input
        type="file"
        value=""
        onChange={onFileDrop}
        accept=".jpg, .jpeg, .png"
        disabled={state.imageURL !== ""}
      />
    </DropWrapper>
  );
};

export default DropFileInput;

type PropsType = {
  handleFileUpload: (file: FileList) => void;
};
