import { Colors } from "../lib/colors";
import { H2 } from "../lib/typography";

export const CTA = props => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      style={{
        backgroundColor: Colors.blue,
        border: "none",
        cursor: "pointer"
      }}
    >
      <H2
        color={Colors.white}
        style={{
          padding: "5pt 20pt",
          margin: "0"
        }}
      >
        {props.children}
      </H2>
    </button>
  );
};
