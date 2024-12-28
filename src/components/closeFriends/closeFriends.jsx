const closeFriends = ({ user }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  return (
    <li className="sidebarFriend">
      <img
        className="SidebarFriendImg"
        src={PF+user.profilePicture}
        alt={user.username}
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default closeFriends;
