import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";

export const ButtonPad = (props: { setView: (value: boolean) => void }) => {
  const handleViewBlock = () => {
    props.setView(true);
  };

  const handleViewList = () => {
    props.setView(false);
  };

  return (
    <div>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-end"
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
