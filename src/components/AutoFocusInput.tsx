import { IonInput } from "@ionic/react";
import React, { createRef, useEffect } from "react";

const AutoFocusInput: React.FC<any> = ({ ...props }) => {
  const autoFocus = createRef<HTMLIonInputElement>();

  useEffect(() => {
    setTimeout(() => autoFocus?.current?.setFocus(), 300);
  }, [autoFocus]);

  return <IonInput autofocus {...props} />;
};

export default AutoFocusInput;
