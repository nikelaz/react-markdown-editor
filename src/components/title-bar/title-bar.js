import './title-bar.css';

const TitleBar = ({ title, aside }) => (
  <div className="mb-4">
    <div className="titleBar__wrap">
      { title && <h4 className="mb-2">{ title }</h4> }
      { aside && <h6>{ aside }</h6>}
    </div>
    <hr />
  </div>
);

export default TitleBar;
