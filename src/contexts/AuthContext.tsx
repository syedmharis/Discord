// import { Auth, API, graphqlOperation } from "aws-amplify";
import { createContext, useState, useContext, useEffect } from "react";
// import { getStreamToken } from "../graphql/queries";
// import { Alert } from "react-native";

const AuthContext = createContext({
  userId: null as string | null,
  setUserId: (newId: string) => {},
});

const AuthContextComponent = ({ children, client }) => {
  const [userId, setUserId] = useState("demo-user");

  const connectStreamChatUser = async () => {
    // Mock user data for UI testing
    const mockUser = {
      id: "demo-user",
      name: "Demo User",
      image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
    };

    // For UI testing without backend, we'll skip the actual connection
    // await client.connectUser(mockUser, "demo-token");

    // const channel = client.channel("livestream", "public", { name: "Public" });
    // await channel.watch();

    setUserId(mockUser.id);
  };

  useEffect(() => {
    connectStreamChatUser();
  }, []);

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;

export const useAuthContext = () => useContext(AuthContext);
