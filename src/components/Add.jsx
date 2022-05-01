import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import {useState} from "react";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const Add = () => {

    const [open, setOpen] = useState(false);
    return <>
        <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>

        <Button onClick={(e)=>setOpen(true)}>Open modal</Button>
        <StyledModal
            open={open}
            onClose={ (e) => setOpen(false) }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} padding={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                <UserBox>
                    <Avatar
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        sx={{ width: 30, height: 30 }}
                    />
                    <Typography fontWeight={500} variant="span">
                        John Doe
                    </Typography>
                </UserBox>
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What is on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} marginTop={2} marginBottom={3}>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary"/>
                    <VideoCameraBack color="success"/>
                    <PersonAdd color="error"/>
                </Stack>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                    <Button sx={{width: "100px"}}>Post</Button>
                    <Button><DateRange/></Button>
                </ButtonGroup>

            </Box>
        </StyledModal>

    </>;
}
export default Add;