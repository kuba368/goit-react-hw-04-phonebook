import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name: </p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

export default Filter;
