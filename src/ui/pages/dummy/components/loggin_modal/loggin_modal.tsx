import { LoggingModalStyled } from "@/src/ui/pages/dummy/components/loggin_modal/loggin_modal.styled";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const LoggingModal = forwardRef<HTMLDivElement, unknown>((props, ref) => {
  return (
    <LoggingModalStyled ref={ref}>
      <h4>Please log in to access Dummy Page</h4>
    </LoggingModalStyled>
  );
});
