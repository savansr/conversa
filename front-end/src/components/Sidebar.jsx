import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-8 lg:w-36 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-1">
        <div className="flex items-center gap-0.5">
          <Users className="size-2.5" />
          <span className="font-medium hidden lg:block text-xs">Contacts</span>
        </div>
        {/* Online filter toggle */}
        <div className="mt-0.5 hidden lg:flex items-center gap-0.5 justify-between">
          <label className="cursor-pointer flex items-center gap-0.5">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-xs"
            />
            <span className="text-xs">Online</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1})</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full px-0.5 py-0.5 flex flex-col lg:items-center gap-0.5
              hover:bg-base-300 transition-colors
              ${selectedUser?._id === user._id ? "bg-base-300" : ""}
            `}
          >
            <div className="relative mx-auto">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute -bottom-[0.5px] -right-[0.5px] size-1 bg-green-500 rounded-full" />
              )}
            </div>

            {/* User info - centered below avatar */}
            <div className="hidden lg:flex flex-col items-center min-w-0 w-full">
              <div className="font-medium text-xs truncate w-full text-center">{user.fullName}</div>
              <div className="text-[10px] text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-1 text-xs">No users</div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;