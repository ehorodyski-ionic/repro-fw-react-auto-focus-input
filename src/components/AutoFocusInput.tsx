import { IonInput } from "@ionic/react";
import React, { useEffect, useRef } from "react";

const AutoFocusInput: React.FC<any> = ({ ...props }) => {
  const autoFocus = useRef<HTMLIonInputElement>();

  useEffect(() => {
    setTimeout(() => autoFocus?.current?.setFocus(), 300);
  }, [autoFocus]);

  return <IonInput ref={autoFocus} {...props} />;
};

export default AutoFocusInput;
