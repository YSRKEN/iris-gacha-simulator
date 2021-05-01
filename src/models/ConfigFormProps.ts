import ConfigFormPropsBase from "./ConfigFormPropsBase";
import OnePickupProps from "./OnePickupProps";
import TwoPickupProps from "./TwoPickupProps";

type ConfigFormProps = ConfigFormPropsBase & (OnePickupProps | TwoPickupProps);

export default ConfigFormProps;
