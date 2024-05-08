import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexNav"
        component={PokedexScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PokemonNav"
        component={PokemonScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
