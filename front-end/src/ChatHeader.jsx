import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="min-h-[3rem] py-1 px-2 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full relative">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
  
          {/* User info */}
          <div className="flex flex-col leading-[1.2]">
            <h3 className="font-medium text-base">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
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