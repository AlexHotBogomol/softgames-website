import {components} from "react-select";
import DropDownUp from "../assets/icons/DropDownUp";
import DropDownDown from "../assets/icons/DropDownDown";

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <div>
          {props.selectProps.menuIsOpen ? <DropDownUp /> : <DropDownDown />}
        </div>
      </components.DropdownIndicator>
    )
  );
};

export default DropdownIndicator