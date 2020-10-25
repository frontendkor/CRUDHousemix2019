import React from "react";

import { Field, reduxForm } from "redux-form";

import { PreloaderForm } from "../PreloaderForm/PreloaderForm";
import Btn from "../../Btn/Btn";

import { InputText, InputPassword } from "../Inputs/Inputs";
import {
  requiredInput,
  correctInputLengthName,
  correctInputLengthPassword,
  correctInputLetter
} from "../validate";

import "./AuthorizationForm.sass";

let AuthorizationForm = props => {
  const { handleSubmit, wait } = props;
  return (
    <form className="AuthorizationForm">
      {wait ? <PreloaderForm /> : null}
      <Field
        name="login"
        component={InputText}
        validate={[requiredInput, correctInputLengthName, correctInputLetter]}
        classis="login"
        placeholder="Логин"
      />
      <Field
        name="password"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLengthPassword,
          correctInputLetter
        ]}
        classis="password"
      />
      <div className="AuthorizationFormBtns">
        <Btn
          type="link"
          to="/registration"
          title="Зарегистрироваться"
          size="medium"
        />
        <Btn
          type="btn"
          submit={true}
          title="Войти"
          size="medium"
          onClick={handleSubmit.bind(this)}
        />
      </div>
    </form>
  );
};

AuthorizationForm = reduxForm({
  form: "AuthorizationForm"
})(AuthorizationForm);

export default AuthorizationForm;
