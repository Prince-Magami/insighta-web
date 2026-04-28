export default function Login() {
  const loginWithGithub = () => {
    window.location.href =
      "https://your-backend.onrender.com/api/v1/auth/github";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Insighta Labs+</h1>

      <button onClick={loginWithGithub}>
        Continue with GitHub
      </button>
    </div>
  );
}
