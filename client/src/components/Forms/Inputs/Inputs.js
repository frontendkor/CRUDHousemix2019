import React from "react";
import InputMask from "react-input-mask";

import { TextInput, Textarea } from "react-materialize";

import "./Inputs.sass";

const InputText = props => {
  const { input, meta, classis, placeholder, label } = props;
  return (
    <div className={classis}>
      <label>
        {label && label}
        <TextInput {...input} placeholder={placeholder} />
      </label>
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

const InputMessage = props => {
  const { input, meta, classis, placeholder, label } = props;
  return (
    <div className={classis}>
      <label>
        {label && label}
        <Textarea {...input} placeholder={placeholder} />
      </label>
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

const InputPhone = props => {
  const { input, meta, classis, mask, label } = props;
  return (
    <div className={classis}>
      <label>
        {label && label}
        <InputMask {...input} type="text" mask={mask} alwaysShowMask={true} />
      </label>
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

const InputPassword = props => {
  const { input, meta, classis, label } = props;
  return (
    <div className={classis}>
      <label>
        {label && label}
        <TextInput {...input} password placeholder="Пароль" />
      </label>
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
};

export { InputPassword, InputText, InputPhone, InputMessage };
