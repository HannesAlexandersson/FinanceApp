import props from 'prop-types';
import style from './header.module.css';

function Header() {
  
  return (
    <>
      <header>
        <div className={style.titleBox}>
          <div className={style.titleWrapper}>
            <h1>***</h1>
            <h1>The Finance app 5000</h1>
            <h1>***</h1>
            <h1>GET THE CURRENT STOCKPRICE</h1>
            <h1>***</h1>
            <h1>Search any stock</h1>
          </div>
          <div className={style.titleWrapper} aria-hidden="true">
            <h1>***</h1>
            <h1>The Finance app 5000</h1>
            <h1>***</h1>
            <h1>GET THE CURRENT STOCKPRICE</h1>
            <h1>***</h1>
            <h1>Search any stock</h1>
          </div>
        </div>        
      </header>
    </>
  );
}
Header.propTypes = {
  selectedCategory: props.string,
  handleGetJoke: props.func,
};
export default Header;