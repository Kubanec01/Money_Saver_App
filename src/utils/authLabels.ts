import { t } from "i18next";

export const plHol = {
  name: t("auth.placeholders.name"),
  email: t("auth.placeholders.email"),
  enterEmail: t("auth.placeholders.enterEmail"),
  password: t("auth.placeholders.password"),
  createPassword: t("auth.placeholders.createPassword"),
  confirmPassword: t("auth.placeholders.confirmPassword"),
  enterCurrentPassword: t("auth.placeholders.enterCurrentPassword"),
  setNewPassword: t("auth.placeholders.setNewPassword"),
  confirmYourCurrPassword: t("auth.placeholders.confirmYourCurrPassword"),
};

export const errorMess = {
  enterEmailAndPassword: t("auth.messages.errors.enterEmailAndPassword"),
  enterEmail: t("auth.messages.errors.enterEmail"),
  wrongEmailOrPassword: t("auth.messages.errors.wrongEmailOrPassword"),
  ReturnToLoginPage: t("auth.messages.errors.ReturnToLoginPage"),
  noUserFound: t("auth.messages.errors.noUserFound"),
  passwordIsTooWeak: t("auth.messages.errors.passwordIsTooWeak"),
  incorrectPassword: t("auth.messages.errors.incorrectPassword"),
  fillAllInformation: t("auth.messages.errors.fillAllInformation"),
  passwordsDoNotMatch: t("auth.messages.errors.passwordsDoNotMatch"),
  emailsIsInUse: t("auth.messages.errors.emailsIsInUse"),
  weakPassword: t("auth.messages.errors.weakPassword"),
  unknownError: t("auth.messages.errors.unknownError"),
  unknownErrorChangePassword: t(
    "auth.messages.errors.unknownErrorChangePassword"
  ),
};

export const successMess = {
  passwordResetEmailSent: t("auth.messages.success.passwordResetEmailSent"),
  passwordWasChanged: t("auth.messages.success.passwordWasChanged"),
};
