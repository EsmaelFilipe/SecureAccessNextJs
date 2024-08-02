import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="welcome back "
      backButtonLabel="Dont add an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login-Form
    </CardWrapper>
  );
};
