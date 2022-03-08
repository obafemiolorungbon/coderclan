export const Header = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        width: "100%",
        height: "5vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "2rem",
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};
