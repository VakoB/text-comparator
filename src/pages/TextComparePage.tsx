import { useState } from "react";
import diff_match_patch from "diff-match-patch";
import TextArea from "../components/TextArea";
import TextAreaVariant from "../constants/TextAreaVariant";
import type { TextDifferenceArray } from "../types/TextDifferenceArray";
import styled from "styled-components";
import swapArrowIcon from "../assets/Arrow.svg";
import plus from "../assets/plus.svg";
import expandArrow from "../assets/expand-arrow.svg";
import LoadingBar from "../components/LoadingBar";

const TextComparePageLayout = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 40px 0 24px;
  @media (max-width: 768px) {
    margin: 0;
    padding-inline: 28px;
  }

  @media (max-width: 500px) {
    margin: 0;
    padding-inline: 16px;
  }
`;

const TextAreas = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

const SwapArrow = styled.img`
  @media (max-width: 380px) {
    transform: rotate(90deg);
  }
`;

const CompareButton = styled.button<{
  isCompareButtonClickable: boolean;
}>`
  width: 142px;
  height: 48px;
  gap: 4px;
  opacity: 1;
  border-radius: 6px;
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 10px;
  padding-left: 16px;
  background: none;
  border: none;

  background-color: ${(props) =>
    props.isCompareButtonClickable ? "#4571E4" : "#383a4899"};
  color: white;

  ${(props) =>
    props.isCompareButtonClickable &&
    `
    &:hover {
     cursor: pointer
    }
   `}
`;

const CompareButtonWrapper = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 32px;
`;

const RefreshTextareasButton = styled.button<{ isActive: boolean }>`
  width: 150px;
  height: 42px;
  gap: 4px;
  opacity: 1;
  border-radius: 6px;
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 10px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;

  @media (max-width: 417px) {
    width: 100%;
  }

  background-color: ${(props) => (props.isActive ? "#4571E4" : "#383a4899")};

  &:hover {
    cursor: ${(props) => (props.isActive ? "pointer" : "default")};
  }
`;

const AdditionalOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
  min-height: 58px;
  @media (max-width: 417px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
  }
`;

const CustomSelect = styled.div`
  width: 155px;
  height: 40px;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 4px 6px 4px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 417px) {
    width: 100%;
  }
`;

const LanguageAndFormatOptions = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media (max-width: 417px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CheckboxWrapper = styled.label`
  display: inline-block;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: green;
    border-color: green;
  }

  &:checked::after {
    content: "✓";
    position: absolute;
    top: -2px;
    left: 2px;
    color: white;
    font-size: 16px;
  }

  &:hover {
    border-color: #999;
  }
`;

const CheckboxWithText = styled.div`
  display: flex;
  text-align: center;
  gap: 8px;
  align-items: center;
  @media (max-width: 417px) {
    width: 100%;
  }
`;

export default function TextComparePage() {
  const [originalText, setOriginalText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [diffs, setDiffs] = useState<TextDifferenceArray>(null);
  const [isTextAreaActive, setIsTextAreaActive] = useState(false);
  const isCompareButtonClickable = originalText !== "" && changedText !== "";
  const [isLoading, setIsloading] = useState(false);
  const isRefreshButtonActive = originalText !== "" || changedText !== "";

  const comparator = async () => {
    if (!isCompareButtonClickable) return;

    setIsloading(true);
    setIsTextAreaActive(false);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const dmp = new diff_match_patch();
    const difference = dmp.diff_main(originalText, changedText);

    setDiffs(difference);
    setIsloading(false);
  };

  return (
    <TextComparePageLayout>
      <AdditionalOptions>
        <LanguageAndFormatOptions>
          <CustomSelect>
            ქართული <img src={expandArrow} alt="expand arrow" />
          </CustomSelect>

          <CheckboxWithText>
            <CheckboxWrapper htmlFor="keep-formatting">
              <Checkbox type="checkbox" id="keep-formatting" />
            </CheckboxWrapper>
            ფორმატის შენარჩუნება
          </CheckboxWithText>
        </LanguageAndFormatOptions>
        <RefreshTextareasButton
          isActive={isRefreshButtonActive}
          onClick={() => {
            setChangedText("");
            setOriginalText("");
          }}
        >
          <img src={plus} alt="plus" />
          ახლის გახსნა
        </RefreshTextareasButton>
      </AdditionalOptions>
      {isLoading || (
        <TextAreas>
          <TextArea
            value={originalText}
            onChange={(e) => {
              setIsTextAreaActive(true);
              setOriginalText(e.target.value);
            }}
            type={TextAreaVariant.ORIGINAL}
            diffs={diffs}
            isTextAreaActive={isTextAreaActive}
            setIsTextAreaActive={setIsTextAreaActive}
            isRefreshButtonActive={isRefreshButtonActive}
          />
          <SwapArrow alt="swap arrow" src={swapArrowIcon} />
          <TextArea
            value={changedText}
            onChange={(e) => {
              setIsTextAreaActive(true);
              setChangedText(e.target.value);
            }}
            type={TextAreaVariant.CHANGED}
            diffs={diffs}
            isTextAreaActive={isTextAreaActive}
            setIsTextAreaActive={setIsTextAreaActive}
            isRefreshButtonActive={isRefreshButtonActive}
          />
        </TextAreas>
      )}
      {isLoading && <LoadingBar />}
      <CompareButtonWrapper>
        <CompareButton
          isCompareButtonClickable={isCompareButtonClickable}
          onClick={comparator}
        >
          შედარება
        </CompareButton>
      </CompareButtonWrapper>
    </TextComparePageLayout>
  );
}
