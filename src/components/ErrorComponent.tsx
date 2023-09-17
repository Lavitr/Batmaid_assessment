import { FC, ReactElement } from "react";

type ErrorComponentProps = {
  error: string;
};

const ErrorComponent: FC<ErrorComponentProps> = ({ error }): ReactElement => (
  <>
    <h4 className="error-hint">Something went wrong:</h4>
    <h3 className="error-message">{error}</h3>
    <h4 className="error-hint">Try to reload browser</h4>
  </>
);

export default ErrorComponent;
