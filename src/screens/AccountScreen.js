import { SafeAreaView, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export default function AccountScreen() {
  const { auth } = useAuth();
  return <SafeAreaView>{auth ? <UserData /> : <LoginForm />}</SafeAreaView>;
}
