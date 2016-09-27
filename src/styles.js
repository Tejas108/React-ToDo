/**
 * Created by Tejas on 9/1/16.
 */
const Styles = {
  list: {
    parent: {
      marginLeft: "0"
    },
    form: {
      width: "10",
      float: "left",
      marginRight: "1em"
    },
    item: {
      color: "#5f5f5f",
      lineHeight: "2.3em",
      listStyleType: "none",
      padding: "10",
      height: "64",
      border: "1px solid #d4d4d4",
      marginBottom: ".5em",
    }
  },
  alert: {
    borderStyle: "solid",
    borderWidth: "1",
    fontSize: "0.72222rem",
    fontWeight: "normal",
    marginBottom: "1.11111rem",
    padding: "0.77778rem 1.33333rem 0.77778rem 0.77778rem",
    position: "relative",
    transition: "opacity 300ms ease-out",
    backgroundColor: "#008CBA",
    borderColor: "#0078a0",
    color: "#FFFFFF",
  },
  alertWarning: {
    backgroundColor: "#f04124",
    borderColor: "#3a945b",
    color: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: "1px",
    fontSize: "0.72222rem",
    fontWeight: "normal",
    marginBottom: "1.11111rem",
    padding: "0.77778rem 1.33333rem 0.77778rem 0.77778rem",
    position: "relative",
    transition: "opacity 300ms ease-out",
    backgroundColor: "#de2d0f",
    borderColor: "#de2d0f",
    color: "#FFFFFF",
  },
  alertClose: {
    right: "0.22222rem",
    background: "inherit",
    color: "#333333",
    fontSize: "1.22222rem",
    lineHeight: ".9",
    marginTop: "-0.61111rem",
    opacity: "0.3",
    padding: "0 6px 4px",
    position: "absolute",
    top: "50%",
  }
}

export default Styles;
