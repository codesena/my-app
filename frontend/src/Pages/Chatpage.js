import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SlideDrawer from "../components/miscellaneous/SlideDrawer";
import MyChat from "../components/MyChat";
import ChatBox from "../components/ChatBox";
import { useState } from "react";
const Chatpage = () => {
    const { user } = ChatState();
    const [fetchAgain, setFetchAgain] = useState();
    return (
        <div style={{ width: "100%" }}>
            {user && <SlideDrawer />}
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                w="100%" h="91.5vh" p="10px"
            >
                {user && <MyChat fetchAgain={fetchAgain} />}
                {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
            </Box>
        </div>
    )

}
export default Chatpage
