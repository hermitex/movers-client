import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function AvatarImage({ url }) {
  return (
    <Stack
      direction="row"
      spacing={2}
    >
      <Avatar
        alt="Travis Howard"
        src="/static/images/avatar/2.jpg"
      />
    </Stack>
  );
}

export default AvatarImage;
