import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const SelectCountry = ({data, setCountry}) => {
  // const [selected, setSelected] = useState("");

  // console.log(selected)

  return (
    <ReactFlagsSelect
      selected={data.country}
      onSelect={(code) => setCountry(code)}
      searchable={true}
      selectedSize={24}

    />
  );
};

export default SelectCountry;
