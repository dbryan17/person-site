export default function Disclaimer({ name, isNotPlural }) {
  return (
    <p className="is-size-6 dull-text">
      {`The opinions discussed in ` +
        (isNotPlural ? "this" : "these") +
        " blogs are that of " +
        name +
        " and " +
        name +
        " alone. " +
        "Dakota Bryan neither endorses or opposes these opions and topics. " +
        name +
        " maintains full creative control."}
    </p>
  );
}
