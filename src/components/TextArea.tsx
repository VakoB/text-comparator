import styled from "styled-components";
import type TextAreaProps from "../types/TextAreaProps";
import { useRef } from "react";
import TextAreaVariant from "../constants/TextAreaVariant";

export const DeletedText = styled.span`
  background-color: red;
  color: white;
`;

export const ChangedText = styled.span`
  background-color: green;
  color: white;
`;


const sharedTextStyles = `
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
`;

const CustomTextArea = styled.textarea`
  ${sharedTextStyles}
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  color: black;
  box-sizing: border-box;
  padding: var(--pad);
  z-index: 2;
`;

const CustomTextAreaHighlighter = styled.div`
  ${sharedTextStyles}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  color: transparent;
  overflow: auto; /* 👈 allow scrolling */
  white-space: pre-wrap; /* preserve \n */
  word-wrap: break-word; /* wrap long words */
  pointer-events: none; /* so clicks go to textarea */
  overflow-x: hidden;
  box-sizing: border-box;
  /* padding: var(--pad); */
  padding: var(--pad);
    & span {
    z-index: -1;
  }
`;

const CustomTextAreaWrapper = styled.div`
  --pad: 12px;

  position: relative;
  display: inline-block;
  background-color: #f0f7ff;
  /* max-width: 542px; */
  height: 431px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;

  @media (max-width: 380px) {
    height: 190px
  }
`;



export default function TextArea(props: TextAreaProps) {
  const highlighterRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleScroll = () => {
    if (highlighterRef.current && textareaRef.current) {
      highlighterRef.current.scrollTop = textareaRef.current.scrollTop;
      highlighterRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };
  return (
    <CustomTextAreaWrapper>
      <CustomTextArea
        value={props.value}
        onChange={props.onChange}
        onScroll={handleScroll}
        ref={textareaRef}
        placeholder="დაიწყე წერა..."
      ></CustomTextArea>
      <CustomTextAreaHighlighter ref={highlighterRef}>
        {props.diffs &&
          props.diffs?.map(([type, text], index) => {
            if (type === 0 || props.isTextAreaActive) {
              return <span key={index}>{text}</span>;
            }
            else if (type === -1 && props.type === TextAreaVariant.ORIGINAL) {
              return <DeletedText key={index}>{text}</DeletedText>
            }
            else if (type === 1 && props.type === TextAreaVariant.CHANGED) {
              return <ChangedText key={index}>{text}</ChangedText>
            }
          })}
      </CustomTextAreaHighlighter>
    </CustomTextAreaWrapper>
  );
}
