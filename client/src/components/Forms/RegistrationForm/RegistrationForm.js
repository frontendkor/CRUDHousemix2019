import React from "react";

import { Field, reduxForm } from "redux-form";

import Btn from "../../Btn/Btn";

import { InputText, InputPassword, InputPhone } from "../Inputs/Inputs";

import {
  requiredInput,
  correctInputLengthName,
  correctInputLengthPassword,
  correctInputLetter,
  correctInputPhone,
  requiredInputPhone
} from "../validate";

import "./RegistrationForm.sass";

let RegistrationForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="RegistrationForm">
      <h5>Регистрация</h5>
      <Field
        name="login"
        label="Логин"
        component={InputText}
        validate={[requiredInput, correctInputLengthName, correctInputLetter]}
        classis="login"
        placeholder="Логин"
      />

      <Field
        name="password"
        label="Пароль"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLengthPassword,
          correctInputLetter
        ]}
        classis="password"
      />
      <Field
        name="phone"
        label="Номер телефона"
        type="text"
        component={InputPhone}
        mask="+ (375) 999 999 999"
        validate={[requiredInput, correctInputPhone, requiredInputPhone]}
        classis="phone"
      />
      <Btn
        type="btn"
        submit={true}
        title="Зарегистрироваться"
        size="medium"
        onClick={handleSubmit.bind(this)}
      />
    </form>
  );
};

RegistrationForm = reduxForm({
  form: "RegistrationForm"
})(RegistrationForm);

export default RegistrationForm;
