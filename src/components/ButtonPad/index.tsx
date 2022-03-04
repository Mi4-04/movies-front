import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";

export const ButtonPad = (props: {
  setBlockView: (value: boolean) => void;
}) => {
  const handleViewBlock = () => {
    props.setBlockView(true);
  };

  const handleViewList = () => {
    props.setBlockView(false);
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={2}
      >
        <IconButton size="large" onClick={() => handleViewBlock()}>
          <AppsOutlinedIcon />
        </IconButton>

        <IconButton size="large" onClick={() => handleViewList()}>
          <DensityMediumOutlinedIcon />
        </IconButton>
      </Stack>
    </div>
  );
};
