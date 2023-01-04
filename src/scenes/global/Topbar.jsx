import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  console.log(theme);
  const colors = tokens(theme.palette.mode);
  console.log(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Search bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
          {/*Search bar */}
          <Box   display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode ==="dark"?(<DarkModeOutlinedIcon/>):  (<LightModeOutlinedIcon/>)}
           
            </IconButton>
            <IconButton>
            <NotificationAddOutlinedIcon/>
            </IconButton>
            <IconButton>
            <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
            <PersonOutlinedIcon/>
            </IconButton>
          </Box>
    </Box>
  );
};

export default Topbar;
