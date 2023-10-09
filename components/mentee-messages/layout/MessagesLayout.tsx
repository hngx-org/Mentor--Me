import React from "react";
import { Button } from "@/components/buttons/button";
import SearchInput from "../inputs/SearchInput";
import MessageCard from "../MessageCard";
import MessageUserProfile from "../ProfileHeader";
import MessageBubble from "../MessageBubble";
import MenteeMessageInput from "../inputs/MenteeMessageInput";

type MessagesLayoutProps = {
  children: React.ReactNode;
};

export default function MessagesLayout() {
  return (
    <div className="md:h-[90dvh]  w-[100%] pl-4 pt-4  overflow-clip lg:h-[100dvh]">
      <div className="flex w-[100%] justify-center h-[100%]">
        <div className="border border-b-[0] rounded-t-[8px] w-[100%] sm:w-[305px] h-[100%] pb-10">
          <div className="py-5  flex flex-col space-y-5 items-center  w-[100%] px-4 ">
            <Button
              variant="primary"
              type="button"
              className=" px-2 py-2 !w-[100%] "
            >
              <p>Write Message</p>
            </Button>
            <SearchInput />
          </div>
          <div className="overflow-y-scroll hide-message-layout-scroll h-[83%] ">
            <MessageCard userName="Patricia Flow" />
            <MessageCard userName="Mauteen" />
            <MessageCard userName="Naomi Hyde" />
            <MessageCard userName="Grace Daniels" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
          </div>
        </div>
        <div className="flex flex-col space-between h-[100%] hidden sm:flex">
          <div className="px-4">
            <MessageUserProfile userName="Patricia flow" />
          </div>

          <div className=" hide-message-layout-scroll overflow-y-scroll px-4 ">
            <MessageBubble
              message="sent"
              timeStamp="2:35pm"
              text="   In our next session, I will review your resume and your cv. So
            before our next session, edit those aspects I pointed out so that we
            can go over it together"
            />
            <MessageBubble
              message="sent"
              text="You have got this, keep going and do not doubt your self at any point."
              timeStamp="2:37pm"
            />
            <MessageBubble message="recieved" text="thank you" />
            <MessageBubble
              message="recieved"
              text="Alright, Patricia. I will do that."
              timeStamp="2:37pm"
            />
            <MessageBubble
              message="sent"
              timeStamp="2:35pm"
              text="   In our next session, I will review your resume and your cv. So
            before our next session, edit those aspects I pointed out so that we
            can go over it together"
            />
            <MessageBubble
              message="sent"
              text="You have got this, keep going and do not doubt your self at any point."
              timeStamp="2:37pm"
            />
            <MessageBubble message="recieved" text="thank you" />
            <MessageBubble
              message="recieved"
              text="Alright, Patricia. I will do that."
              timeStamp="2:37pm"
            />
            <MessageBubble
              message="sent"
              timeStamp="2:35pm"
              text="   In our next session, I will review your resume and your cv. So
            before our next session, edit those aspects I pointed out so that we
            can go over it together"
            />
          </div>
          <MenteeMessageInput />
        </div>
      </div>
    </div>
  );
}
