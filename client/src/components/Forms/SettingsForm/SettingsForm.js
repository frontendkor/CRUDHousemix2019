import React from "react";
import { Field, reduxForm } from "redux-form";
import Btn from "../../Btn/Btn";
import { InputPassword } from "../Inputs/Inputs";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import {
  requiredInput,
  correctInputLetter,
  correctInputLengthPassword,
  settingsPasswordNewValidate
} from "../validate";

import "./SettingsForm.sass";

let SettingsForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="SettingsForm">
      <h5>Изменить пароль</h5>
      <Field
        name="passwordActual"
        label="Текущий пароль"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLetter,
          correctInputLengthPassword
        ]}
        classis="passwordActual"
      />
      <Field
        name="passwordNew"
        label="Новый пароль"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLetter,
          correctInputLengthPassword
        ]}
        classis="passwordNew"
      />
      <Field
        name="passwordRepeat"
        label="Повторите новый пароль"
        component={InputPassword}
        validate={[
          requiredInput,
          correctInputLetter,
          correctInputLengthPassword,
          settingsPasswordNewValidate
        ]}
        classis="passwordRepeat"
      />
      <div className="SettingsFormBtns">
        <Btn
          type="btn"
          submit={true}
          title="Сохранить"
          size="medium"
          onClick={handleSubmit.bind(this)}
        />
        <Btn
          type="link"
          to="/profile"
          title="Назад"
          size="medium"
          onClick={ScrollTop}
        />
      </div>
    </form>
  );
};

SettingsForm = reduxForm({
  form: "SettingsForm"
})(SettingsForm);

export default SettingsForm;
