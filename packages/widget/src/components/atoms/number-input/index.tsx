import BigNumber from "bignumber.js";
import { Maybe } from "purify-ts";
import { ChangeEvent, memo, useEffect, useRef, useState } from "react";
import { numberInput, spanStyle } from "./styles.css";
import { useAutoResizeText } from "./use-auto-resize-text";
import { createPortal } from "react-dom";
import { useRootElement } from "../../../hooks/use-root-element";

export type NumberInputProps = {
  onChange: (value: Maybe<BigNumber>) => void;
  value: Maybe<BigNumber>;
};

export const NumberInput = memo(({ onChange, value }: NumberInputProps) => {
  const [localState, setLocalState] = useState("0");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) return;

    setLocalState((prevState) => {
      return value.caseOf({
        Just(value) {
          if (value.isEqualTo(new BigNumber(prevState))) return prevState;

          const valStr = value.toPrecision();
          return valStr;
        },
        Nothing() {
          return "0";
        },
      });
    });
  }, [value, isFocused]);

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setLocalState(val);

    if (!val) return onChange(Maybe.of(new BigNumber(0)));

    const value = new BigNumber(val);

    if (value.isNaN()) return;

    onChange(Maybe.of(value));
  };

  const isZero = localState === "0" || localState === "";

  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useAutoResizeText({
    inputRef,
    spanRef,
    inputVal: localState,
  });

  const rootElement = useRootElement();

  return (
    <>
      <input
        name="stake-amount"
        ref={inputRef}
        data-testid="number-input"
        type="number"
        inputMode="decimal"
        className={numberInput}
        value={localState}
        onChange={_onChange}
        onBlur={() => {
          setIsFocused(false);
          if (isZero) setLocalState("0");
        }}
        onFocus={() => {
          setIsFocused(true);
          if (isZero) setLocalState("");
        }}
      />
      {rootElement &&
        createPortal(
          <span ref={spanRef} className={spanStyle}>
            {localState}
          </span>,
          rootElement
        )}
    </>
  );
});