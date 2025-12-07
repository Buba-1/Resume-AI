import React from "react";

const RegistrationSuccess = () => {
  const navy = "#000080";

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      margin: "20px auto",
      maxWidth: "500px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
    },
    icon: {
      fontSize: "4rem",
      color: navy,
      marginBottom: "20px",
    },
    heading: {
      color: navy,
      marginBottom: "10px",
      fontSize: "1.8rem",
      fontWeight: "700",
      fontFamily: "Arial, sans-serif",
    },
    message: {
      color: "#333",
      marginBottom: "25px",
      fontSize: "1.1rem",
      lineHeight: "1.6",
    },
    button: {
      backgroundColor: navy,
      color: "white",
      padding: "10px 20px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>✅</div>

      <h2 style={styles.heading}>Registration Successful!</h2>

      <p style={styles.message}>
        Thank you for joining us. We've sent a{" "}
        <strong>verification link</strong> to your email address. Please check
        your inbox (and spam folder) to verify your email and get started!
      </p>

      <button
        style={styles.button}
        onClick={() => console.log("Simulating resend email action...")}
      >
        Resend Email
      </button>
    </div>
  );
};

export default RegistrationSuccess;
