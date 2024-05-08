import { SafeAreaView, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

export default function AccountScreen() {
  const auth = null;
  return <SafeAreaView>{auth ? <UserData /> : <LoginForm />}</SafeAreaView>;
}
