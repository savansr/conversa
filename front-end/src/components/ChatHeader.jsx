import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="min-h-[4rem] py-2 px-3 border-b border-base-300"> {/* Increased min-height */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2"> {/* Increased gap */}
          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 h-24 lg:w-16 lg:h-16 rounded-full relative"> {/* Increased size of avatar */}
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* User info */}
          <div className="flex flex-col leading-[1]">
            <h3 className="font-medium text-[16px]"> {/* Increased font size */}
              {selectedUser.fullName}
            </h3>
            <p className="text-[12px] text-base-content/70"> {/* Increased font size */}
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)} className="p-0.5 -mr-0.5">
          <X className="size-3" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
