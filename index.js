const Button = (props) => {
  const { name, style } = props;
  return <button className={style}>{name}</button>;
};

const element = (
  <div className="bg">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button name="Like" style="button1" />
      <Button name="Comment" style="button2" />
      <Button name="Share" style="button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
