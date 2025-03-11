import PropTypes from "prop-types";

function CheckList({ isPremiumOnly, onTogglePremium }) {
  return (
    <div className="flex gap-1">
      <label>
        <input
          type="checkbox"
          checked={isPremiumOnly}
          onChange={onTogglePremium}
        />
      </label>
      <p className="font-medium">Show Premium Only</p>
    </div>
  );
}

CheckList.propTypes = {
  isPremiumOnly: PropTypes.bool.isRequired,
  onTogglePremium: PropTypes.func.isRequired,
};

export default CheckList;
